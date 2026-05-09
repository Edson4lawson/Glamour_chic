import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();

const port = process.env.PORT ? Number(process.env.PORT) : 3001;
const frontendOrigin = process.env.FRONTEND_ORIGIN || "*";

// En mode portfolio, on accepte toutes les origines si FRONTEND_ORIGIN n'est pas défini
app.use(cors({
  origin: frontendOrigin === "*" ? true : frontendOrigin
}));
app.use(express.json({ limit: "200kb" }));

const isNonEmptyString = (v) => typeof v === "string" && v.trim().length > 0;

// ─── Health check ────────────────────────────────────────────────
app.get("/api/health", (_req, res) => {
  res.json({ ok: true, mode: "demo" });
});

// ─── Contact form ─────────────────────────────────────────────────
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body || {};

    // Validation des champs
    const errors = {};
    if (!isNonEmptyString(name))    errors.name    = "Name is required";
    if (!isNonEmptyString(email))   errors.email   = "Email is required";
    if (!isNonEmptyString(phone))   errors.phone   = "Phone is required";
    if (!isNonEmptyString(service)) errors.service = "Service is required";
    if (!isNonEmptyString(message) || String(message).trim().length < 10)
      errors.message = "Message must be at least 10 characters";

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ ok: false, errors });
    }

    // Mode démo : afficher la soumission dans les logs du serveur
    console.log("── [DEMO] Nouvelle soumission de formulaire ──────────────────");
    console.log(`  Nom     : ${name}`);
    console.log(`  Email   : ${email}`);
    console.log(`  Tél     : ${phone}`);
    console.log(`  Service : ${service}`);
    console.log(`  Message : ${message}`);
    console.log("──────────────────────────────────────────────────────────────");

    // Simuler un délai réaliste (300ms)
    await new Promise((r) => setTimeout(r, 300));

    return res.json({ ok: true, mode: "demo" });

  } catch (err) {
    console.error("Erreur serveur :", err);
    return res.status(500).json({ ok: false, error: "server_error" });
  }
});

app.listen(port, () => {
  process.stdout.write(`API (mode démo) en écoute sur http://localhost:${port}\n`);
});
