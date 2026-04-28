# 🌸 MonAgenda — Ton agenda personnel

##  Fonctionnalités

-  **Tâches** — titre, description, priorité, heure début/fin, rappel
-  **Rollover automatique** — les tâches non faites glissent au lendemain
-  **Agenda visuel** — vraie grille horaire avec tes créneaux positionnés
-  **Dashboard** — timeline intelligente, créneaux libres, progression du jour
-  **Connexion Google** — tes données sont privées et synchronisées
-  **Multi-appareils** — PC, téléphone, tablette — tout synchronisé en temps réel
-  **Fonctionne hors ligne** — grâce au Service Worker

---

##  Accéder à l'application

### URL principale
 **`https://znait-atman.github.io/Monagenda/`**

### URL alternative (Firebase)
 `https://monagenda-cdfdc.web.app`

---

##  Installer comme une vraie app sur Android

1. Ouvre l'URL dans **Chrome Android**
2. Connecte-toi avec ton compte **Google**
3. Appuie sur **⋮** (menu) → **"Ajouter à l'écran d'accueil"**
4. Confirme → 🎉 MonAgenda apparaît dans ton tiroir d'applications !

---

##  Fichiers

```
Monagenda/
├── index.html      ← Application principale
├── sw.js           ← Service Worker (offline + notifications)
├── manifest.json   ← Métadonnées PWA (icône, nom, couleurs)
├── icon.svg        ← Icône de l'application
├── firebase.json   ← Configuration Firebase Hosting
├── .firebaserc     ← Projet Firebase
└── README.md       ← Ce fichier
```

---

## Utilisation

- **Connexion** : utilise toujours le même compte Google pour retrouver tes données
- **Rollover** : ouvre l'app chaque matin — les tâches non faites se reportent automatiquement
- **Agenda** : tape sur un créneau horaire pour créer une tâche directement à cette heure
- **Notifications** : accepte les notifications au premier lancement pour recevoir tes rappels
