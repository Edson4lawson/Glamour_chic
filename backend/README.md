# Glamour Chic - Backend

API backend pour l'institut de beauté

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

## Production

```bash
npm start
```

## Variables d'environnement

Copiez `.env.example` vers `.env` et configurez :

```env
PORT=3001
FRONTEND_ORIGIN=https://votre-domaine.com
RECAPTCHA_SECRET_KEY=votre_clé_secrète_recaptcha
RECAPTCHA_ACTION=contact
RECAPTCHA_SCORE_THRESHOLD=0.5
SENDGRID_API_KEY=votre_clé_sendgrid
CONTACT_TO_EMAIL=contact@glamourchic.com
CONTACT_FROM_EMAIL=noreply@glamourchic.com
```

## Déploiement

Ce backend est conçu pour être déployé sur :
- Railway
- Render
- Heroku
- ou tout autre service Node.js

## Endpoints

- `POST /api/contact` - Formulaire de contact avec reCAPTCHA
