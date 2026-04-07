# Guide de configuration pour l'hébergement - Glamour Chic

## Étape 1: Configuration Google reCAPTCHA v3

### 1.1 Créer les clés reCAPTCHA
1. Allez sur [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)
2. Connectez-vous avec votre compte Google
3. Remplissez le formulaire :
   - **Label**: Glamour Chic Website
   - **reCAPTCHA type**: reCAPTCHA v3
   - **Domains**: 
     - localhost (pour les tests)
     - votre-domaine.com (pour la production)
4. Acceptez les termes et cliquez sur **Submit**
5. **Copiez immédiatement** les deux clés qui s'affichent :
   - **Site Key** (pour le frontend)
   - **Secret Key** (pour le backend)

### 1.2 Mettre à jour le fichier .env
```env
VITE_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEbQjVQY8LWbKv
RECAPTCHA_SECRET_KEY=6LeIxAcTAAAAAGA-v6CZVD_SBDICaQMtS2nLw_5f9
```

> **Note**: Les clés ci-dessus sont les clés de test officielles de Google. Elles fonctionnent pour les tests mais ne doivent JAMAIS être utilisées en production.

## Étape 2: Configuration SendGrid

### 2.1 Créer un compte SendGrid
1. Allez sur [SendGrid](https://signup.sendgrid.com/)
2. Créez un compte gratuit (100 emails/jour)
3. Vérifiez votre adresse email

### 2.2 Créer une clé API
1. Après connexion, allez dans **Settings** > **API Keys**
2. Cliquez sur **Create API Key**
3. Donnez un nom : "Glamour Chic Website"
4. Sélectionnez **Full Access**
5. Cliquez sur **Create & View**
6. **Copiez immédiatement la clé** (elle ne sera plus affichée)

### 2.3 Configurer l'expéditeur
1. Allez dans **Settings** > **Sender Authentication**
2. Configurez un domaine ou une adresse email vérifiée
3. Pour les tests, vous pouvez utiliser votre email personnel

### 2.4 Mettre à jour le fichier .env
```env
SENDGRID_API_KEY=SG.votre_clé_api_ici
CONTACT_TO_EMAIL=votre-email@example.com
CONTACT_FROM_EMAIL=noreply@votre-domaine.com
```

## Étape 3: Configuration de production

### 3.1 Mettre à jour FRONTEND_ORIGIN
Remplacez `http://localhost:5173` par votre URL de production :
```env
FRONTEND_ORIGIN=https://votre-domaine.com
```

## Étape 4: Test final

### 4.1 Tester localement
```bash
npm run build
npm run preview
npm run dev:server
```

### 4.2 Vérifier les fonctionnalités
- [ ] Le formulaire de contact s'envoie
- [ ] reCAPTCHA fonctionne (vérifiez la console)
- [ ] Les emails sont reçus

## Étape 5: Déploiement recommandé

### Frontend (Vue/Vite)
- **Vercel** (recommandé) - Gratuit et facile
- **Netlify** - Alternative gratuite

### Backend (Express)
- **Railway** - Simple pour débutants
- **Render** - Plan gratuit disponible
- **Heroku** (payant maintenant)

## Variables d'environnement finales

```env
# Frontend
VITE_RECAPTCHA_SITE_KEY=votre_clé_site_recaptcha

# Backend
PORT=3001
FRONTEND_ORIGIN=https://votre-domaine.com
RECAPTCHA_SECRET_KEY=votre_clé_secrète_recaptcha
RECAPTCHA_ACTION=contact
RECAPTCHA_SCORE_THRESHOLD=0.5
SENDGRID_API_KEY=votre_clé_sendgrid
CONTACT_TO_EMAIL=votre-email@exemple.com
CONTACT_FROM_EMAIL=noreply@votre-domaine.com
```

## Support

- **reCAPTCHA**: [Documentation Google](https://developers.google.com/recaptcha/docs/v3)
- **SendGrid**: [Documentation SendGrid](https://docs.sendgrid.com/)
- **Vercel**: [Documentation Vercel](https://vercel.com/docs)
- **Railway**: [Documentation Railway](https://docs.railway.app/)
