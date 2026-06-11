# BTS MEC · Révision U3.1 / U3.2

Application web de révision pour les épreuves **U3.1 Mathématiques** et **U3.2 Physique-Chimie** du BTS Management Économique de la Construction — session 2026 (candidat individuel, écrits des 23–24 juin).

PWA installable sur téléphone, **fonctionne hors-ligne** une fois ouverte, avec fiches de cours, QCM corrigés, flashcards et planning.

---

## Lancer en local

L'app charge les fiches `.md` par `fetch()` : il faut un petit serveur (l'ouverture directe `file://` ne marche pas).

```bash
# depuis le dossier du projet
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

VS Code : extension **Live Server** → clic droit sur `index.html` → *Open with Live Server*.

---

## Publier sur GitHub Pages (accès depuis le téléphone)

```bash
cd bts-mec-revision
git init
git add .
git commit -m "App de révision BTS MEC U31/U32"
git branch -M main
git remote add origin https://github.com/<TON_PSEUDO>/bts-mec-revision.git
git push -u origin main
```

Puis sur GitHub : **Settings → Pages → Build and deployment → Source : _Deploy from a branch_ → Branch : `main` / `/ (root)` → Save.**

L'URL publique apparaît après ~1 min :
`https://<TON_PSEUDO>.github.io/bts-mec-revision/`

> Le fichier `.nojekyll` (déjà présent) est important : il empêche GitHub de masquer les dossiers `assets/`.

### Installer sur le téléphone
Ouvrir l'URL dans le navigateur du téléphone → menu → **« Ajouter à l'écran d'accueil »**. L'app s'ouvre alors en plein écran comme une vraie appli, et reste consultable hors-ligne.

---

## Structure

```
bts-mec-revision/
├── index.html                 App (une seule page, routeur par #ancres)
├── manifest.webmanifest        Métadonnées PWA (installation mobile)
├── sw.js                       Service worker (cache hors-ligne)
├── .nojekyll                   Désactive Jekyll sur Pages
├── assets/
│   ├── css/style.css           Identité « plan technique »
│   ├── js/content-manifest.js  Liste des fiches (à éditer pour en ajouter)
│   ├── js/data.js              QCM + flashcards
│   ├── js/app.js               Routeur, vues, progression (localStorage)
│   └── icons/                  Icônes PWA + favicon
├── content/
│   ├── u31-maths/              9 fiches Markdown (cours + formulaire)
│   └── u32-physique-chimie/    7 fiches Markdown
├── docs/
│   ├── PLANNING.md             Plan de révision J-12 → Jour J
│   └── CHECKLIST.md            À emporter le jour J
└── .github/workflows/deploy.yml  Déploiement Pages automatique (option)
```

---

## Modifier le contenu

- **Une fiche** : éditer le `.md` correspondant dans `content/`. Markdown classique + formules LaTeX entre `$ ... $` (en ligne) ou `$$ ... $$` (centré). Rendu par KaTeX.
- **Ajouter une fiche** : créer le `.md`, puis ajouter une ligne dans `assets/js/content-manifest.js`.
- **QCM / flashcards** : éditer `assets/js/data.js` (`answer` = index de la bonne option, à partir de 0).
- **Cache** : après une grosse modif, incrémenter `CACHE = "btsmec-v1"` dans `sw.js` pour forcer la mise à jour sur les appareils.

---

## Avertissement contenu

Les fiches couvrent les modules **types** du groupement maths/physique-chimie de la filière construction (suites, fonctions, calcul intégral, équations différentielles, statistique, probabilités, calcul vectoriel ; thermique, acoustique, mécanique, hygrométrie, électricité, chimie des matériaux, énergétique). **À recouper avec tes cours, le référentiel officiel et les sujets des sessions précédentes** : la sélection exacte de modules et le format de l'épreuve peuvent varier. Les fiches sont un support de révision, pas un substitut au référentiel.
