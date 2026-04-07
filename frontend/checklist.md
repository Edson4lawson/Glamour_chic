# Checklist pré-hébergement pour votre site Glamour Chic

## 📋 Configuration essentielle

### Variables d'environnement

- [ ] **VITE_RECAPTCHA_SITE_KEY** - Clé reCAPTCHA (obligatoire)
- [ ] **RECAPTCHA_SECRET_KEY** - Clé secrète reCAPTCHA (obligatoire)
- [ ] **SENDGRID_API_KEY** - Clé API SendGrid (pour emails)
- [ ] **CONTACT_TO_EMAIL** - Email de destination pour les contacts
- [ ] **CONTACT_FROM_EMAIL** - Email d'expéditeur pour les contacts
- [ ] **FRONTEND_ORIGIN** - URL de production (à mettre à jour)

### Configuration de production

- [ ] **Mettre à jour FRONTEND_ORIGIN** avec l'URL de production
- [ ] **Tester le build** avec `npm run build`
- [ ] **Vérifier le preview** avec `npm run preview`

## 🔧 Optimisations techniques

### Performance

- [ ] **Optimiser les images** (compression, formats modernes)
- [ ] **Vérifier le bundle size** après build
- [ ] **Configurer le cache** pour les assets statiques
- [ ] **Minifier le CSS/JS** (généralement fait par Vite)

### SEO

- [ ] **Mettre à jour les meta tags** (title, description)
- [ ] **Ajouter les balises Open Graph** pour le partage social
- [ ] **Configurer le favicon** dans tous les formats
- [ ] **Vérifier la structure sémantique HTML5**

## 🛡️ Sécurité

### reCAPTCHA

- [ ] **Configurer reCAPTCHA v3** dans la console Google
- [ ] **Tester le score threshold** (actuellement 0.5)
- [ ] **Vérifier l'action reCAPTCHA** (actuellement "contact")

### Backend

- [ ] **Sécuriser les CORS** pour la production
- [ ] **Valider toutes les entrées** utilisateur
- [ ] **Configurer les headers de sécurité**

## 🚀 Déploiement

### Frontend (Vue/Vite)

- [ ] **Choisir la plateforme** (Vercel, Netlify, etc.)
- [ ] **Configurer les variables d'environnement** de production
- [ ] **Tester le déploiement** en staging

### Backend (Express)

- [ ] **Choisir l'hébergement** (Railway, Render, Heroku, etc.)
- [ ] **Configurer les variables d'environnement** serveur
- [ ] **Mettre en place le monitoring** et les logs

## 📱 Tests finaux

### Fonctionnalités

- [ ] **Tester tous les formulaires** (contact, rendez-vous)
- [ ] **Vérifier la navigation** sur mobile/desktop
- [ ] **Tester le header transparent** au scroll
- [ ] **Valider les animations** AOS

### Compatibilité

- [ ] **Tester sur mobile** (iOS/Android)
- [ ] **Vérifier sur différents navigateurs** (Chrome, Firefox, Safari)
- [ ] **Tester l'accessibilité** (navigation clavier, lecteur d'écran)

## 📝 Documentation

- [ ] **Mettre à jour README.md** avec les instructions de déploiement
- [ ] **Documenter les variables d'environnement**
- [ ] **Créer un guide de maintenance**

## 🔍 Actions immédiates recommandées

1. **Configurer les clés API manquantes** dans le fichier `.env`
2. **Tester le build local** : `npm run build && npm run preview`
3. **Choisir vos plateformes d'hébergement** (frontend + backend)

---

**Priorité absolue** : Compléter la configuration des variables d'environnement pour que les fonctionnalités (reCAPTCHA, emails) fonctionnent en production.
