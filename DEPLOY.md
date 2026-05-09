# 🚀 Guide de Déploiement - Glamour Chic

## Déploiement sur Vercel (Frontend) + Render (Backend)

> **Note** : Railway est payant maintenant. Nous utilisons **Render** (gratuit) pour le backend.

---

## 📋 PRÉREQUIS

Avant de commencer, créez ces comptes gratuits :
- [Vercel](https://vercel.com/signup) (Frontend)
- [Render](https://render.com/) (Backend - Gratuit)
- [GitHub](https://github.com/) (déjà fait )

---

## ÉTAPE 1 : Déployer le Backend sur Render

### 1.1 Connexion Render
1. Allez sur [render.com](https://render.com/)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur **"New Web Service"**

### 1.2 Déploiement depuis GitHub
1. Sélectionnez **"Build and deploy from a Git repository"**
2. Cliquez sur **"Connect GitHub"**
3. Choisissez votre repository `Glamour_chic`
4. Remplissez le formulaire :
   - **Name** : `glamour-chic-backend`
   - **Root Directory** : `backend/`
   - **Runtime** : `Node`
   - **Build Command** : `npm install`
   - **Start Command** : `node server/index.js`

### 1.3 Variables d'environnement Backend
Cliquez sur **"Advanced"** puis **"Add Environment Variable"** pour chaque variable :

```env
PORT=3001
FRONTEND_ORIGIN=https://votre-domaine-vercel.vercel.app
RECAPTCHA_SECRET_KEY=6LeIxAcTAAAAAGA-v6CZVD_SBDICaQMtS2nLw_5f9
RECAPTCHA_ACTION=contact
RECAPTCHA_SCORE_THRESHOLD=0.5
SENDGRID_API_KEY=SG.placeholder_pour_test
CONTACT_TO_EMAIL=votre-email@gmail.com
CONTACT_FROM_EMAIL=noreply@glamourchic.com
```

> 💡 **Note** : Pour un portfolio, les clés de test fonctionnent. Pour la production, remplacez par vos vraies clés.

### 1.4 URL du Backend
Une fois déployé, Render vous donne une URL comme :
```
https://glamour-chic-backend.onrender.com
```
**Notez cette URL**, vous en aurez besoin pour le frontend.

> **⚠️ Important** : Le plan gratuit de Render met le serveur en "sleep" après 15 minutes d'inactivité. Le premier appel après l'inactivité peut prendre 30 secondes.

---

## ÉTAPE 2 : Déployer le Frontend sur Vercel

### 2.1 Connexion Vercel
1. Allez sur [vercel.com](https://vercel.com/)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur **"Add New Project"**

### 2.2 Configuration du projet
1. Importez votre repository `Glamour_chic`
2. **Framework Preset** : Sélectionnez **"Vite"**
3. **Root Directory** : Changez en `frontend/`

### 2.3 Variables d'environnement Frontend
Ajoutez cette variable :
```env
VITE_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEbQjVQY8LWbKv
```

> 💡 **Note** : C'est la clé de test Google. Fonctionne pour les démos.

### 2.4 Build Settings
Vercel détectera automatiquement :
- **Build Command** : `npm run build`
- **Output Directory** : `dist`

### 2.5 Déploiement
Cliquez sur **"Deploy"** et attendez 2-3 minutes.

---

## ÉTAPE 3 : Connecter Frontend ↔ Backend

### 3.1 Mettre à jour FRONTEND_ORIGIN
Dans Railway, mettez à jour :
```env
FRONTEND_ORIGIN=https://votre-site-vercel.vercel.app
```
(Remplacez par l'URL que Vercel vous a donné)

### 3.2 Redéployer le backend
Railway redéploiera automatiquement avec la nouvelle configuration.

---

## ✅ VÉRIFICATION

### Testez votre site :
1. **Accueil** : Le site s'affiche correctement
2. **Navigation** : Le menu fonctionne
3. **Contact** : Le formulaire envoie des emails (si SendGrid configuré)

---

## 🎉 RÉSULTAT ATTENDU

**Frontend** : `https://glamour-chic.vercel.app`  
**Backend** : `https://glamour-chic-backend.up.railway.app`

---

## 🔧 DÉPANNAGE

### Problème : Le formulaire ne fonctionne pas
- Vérifiez que `FRONTEND_ORIGIN` correspond à l'URL Vercel
- Vérifiez les clés reCAPTCHA
- Vérifiez la clé SendGrid

### Problème : Images ne chargent pas
- Vérifiez que le build a bien inclus les assets
- Regardez les logs Vercel

### Problème : CORS errors
- Vérifiez `FRONTEND_ORIGIN` dans Railway
- Assurez-vous que l'URL est exacte (avec https://)

---

## 📞 SUPPORT

- **Vercel Docs** : [vercel.com/docs](https://vercel.com/docs)
- **Railway Docs** : [docs.railway.app](https://docs.railway.app/)
- **reCAPTCHA** : [developers.google.com/recaptcha](https://developers.google.com/recaptcha)

---

## 💰 COÛT

**TOTAL : 0€ / mois** (plan gratuit)
- ✅ Vercel : Hébergement gratuit illimité
- ✅ Railway : 500h/mois gratuit
- ✅ reCAPTCHA : Gratuit
- ✅ SendGrid : 100 emails/jour gratuit

---

**Votre portfolio est prêt ! 🎨✨**
