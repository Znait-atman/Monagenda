# ZeitPlan — Application de gestion du temps

## ✨ Fonctionnalités

- ✅ **Tâches** — avec titre, description, priorité, heure de rappel
- 🔄 **Rollover automatique** — les tâches non faites glissent au lendemain
- 📅 **Agenda hebdomadaire** — créneaux horaires à la seconde
- 🔔 **Rappels** — avec notifications Android (quotidien / hebdomadaire / une fois)
- 📊 **Dashboard** — progression du jour, créneau en cours, rappels du jour
- 📶 **Fonctionne hors ligne** — grâce au Service Worker

---

## 📲 Installation sur Android (2 minutes)

### Option A — GitHub Pages (recommandé, gratuit)

1. Va sur [github.com](https://github.com) → crée un compte si tu n'en as pas
2. Clique **New repository** → nomme-le `zeitplan` → **Public** → Create
3. Clique **uploading an existing file** → glisse-dépose **TOUS LES FICHIERS** du dossier `zeitplan/`
4. Clique **Commit changes**
5. Va dans **Settings → Pages → Source : main** → Save
6. Attends 1-2 minutes → l'URL sera : `https://TON-NOM.github.io/zeitplan/`

7. **Sur ton Android**, ouvre cette URL dans **Chrome**
8. Chrome affiche une bannière "Ajouter à l'écran d'accueil" → confirme
9. 🎉 ZeitPlan apparaît dans ton tiroir d'applications !

### Option B — Netlify Drop (encore plus simple)

1. Va sur [app.netlify.com/drop](https://app.netlify.com/drop)
2. Glisse le **dossier `zeitplan/`** dans la zone
3. Une URL unique est créée instantanément
4. Ouvre-la sur Android dans Chrome → "Ajouter à l'écran d'accueil"

---

## 📁 Fichiers

```
zeitplan/
├── index.html      ← Application principale
├── sw.js           ← Service Worker (offline + notifications)
├── manifest.json   ← Métadonnées PWA (icône, nom, couleurs)
├── icon.svg        ← Icône de l'application
└── README.md       ← Ce fichier
```

---

## 💡 Conseils d'utilisation

- **Notifications** : accepte les notifications au premier lancement
- **Rollover** : ouvre l'app chaque matin — les tâches non faites se reportent automatiquement
- **Secondes** : dans l'Agenda, le champ heure accepte HH:MM:SS pour une précision à la seconde
