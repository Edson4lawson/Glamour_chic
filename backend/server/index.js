import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import sgMail from "@sendgrid/mail";

dotenv.config();

const app = express();

const port = process.env.PORT ? Number(process.env.PORT) : 3001;
const frontendOrigin = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: frontendOrigin }));
app.use(express.json({ limit: "200kb" }));

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

const isNonEmptyString = (v) => typeof v === "string" && v.trim().length > 0;

const verifyRecaptcha = async ({ token, remoteip }) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return { ok: false, reason: "missing_secret" };
  }
  if (!token) {
    return { ok: false, reason: "missing_token" };
  }

  const params = new URLSearchParams();
  params.set("secret", secret);
  params.set("response", token);
  if (remoteip) params.set("remoteip", remoteip);

  const resp = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  const data = await resp.json();

  const scoreThreshold = process.env.RECAPTCHA_SCORE_THRESHOLD
    ? Number(process.env.RECAPTCHA_SCORE_THRESHOLD)
    : 0.5;

  if (!data?.success) {
    return { ok: false, reason: "verification_failed", data };
  }

  if (typeof data.score === "number" && data.score < scoreThreshold) {
    return { ok: false, reason: "low_score", data };
  }

  const expectedAction = process.env.RECAPTCHA_ACTION || "contact";
  if (data.action && data.action !== expectedAction) {
    return { ok: false, reason: "bad_action", data };
  }

  return { ok: true, data };
};

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, service, message, recaptchaToken } = req.body || {};

    const errors = {};

    if (!isNonEmptyString(name)) errors.name = "Name is required";
    if (!isNonEmptyString(email)) errors.email = "Email is required";
    if (!isNonEmptyString(phone)) errors.phone = "Phone is required";
    if (!isNonEmptyString(service)) errors.service = "Service is required";
    if (!isNonEmptyString(message) || String(message).trim().length < 10)
      errors.message = "Message must be at least 10 characters";

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ ok: false, errors });
    }

    const recaptcha = await verifyRecaptcha({
      token: recaptchaToken,
      remoteip: req.ip,
    });

    if (!recaptcha.ok) {
      return res.status(400).json({ ok: false, error: "recaptcha", details: recaptcha.reason });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!process.env.SENDGRID_API_KEY) {
      return res.status(500).json({ ok: false, error: "sendgrid_not_configured" });
    }

    if (!to || !from) {
      return res.status(500).json({ ok: false, error: "email_not_configured" });
    }

    const subject = `New contact request: ${service}`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n");

    await sgMail.send({
      to,
      from,
      subject,
      text,
      replyTo: email,
    });

    return res.json({ ok: true });
  } catch (err) {
    return res.status(500).json({ ok: false, error: "server_error" });
  }
});

app.listen(port, () => {
  process.stdout.write(`API listening on http://localhost:${port}\n`);
});
