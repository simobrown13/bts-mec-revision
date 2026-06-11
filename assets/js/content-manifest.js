/* =========================================================================
   Manifeste de contenu — source unique de vérité pour la liste des fiches.
   Pour AJOUTER une fiche : créer le .md dans content/<matiere>/ puis ajouter
   une ligne ici. L'app le détecte automatiquement.
   ========================================================================= */
self.MANIFEST = {
  matieres: {
    u31: {
      code: "U3.1",
      nom: "Mathématiques",
      coef: 2,
      epreuve: "ORAL 1h35 · mar. 23 juin 2026 · 10:40 → 12:15",
      salle: "L027 · Jury 1",
      cls: "u31",
    },
    u32: {
      code: "U3.2",
      nom: "Physique-Chimie",
      coef: 2,
      epreuve: "EXPÉRIMENTALE 2h · mar. 23 juin 2026 · 08:00",
      salle: "A116 (à confirmer) · Jury 1",
      cls: "u32",
    },
  },

  fiches: [
    // ---- U31 Mathématiques (ordre = programme officiel, 9 modules) ----
    { id: "u31-10", matiere: "u31", num: "★",  title: "Méthode de l'épreuve ORALE",      sub: "1h prépa + exposé 15 min + entretien 20 min",     file: "content/u31-maths/10-methode-oral.md" },
    { id: "u31-00", matiere: "u31", num: "01", title: "Calcul & numération",             sub: "Pourcentages, puissances, proportions, unités",   file: "content/u31-maths/00-calcul-numeration.md" },
    { id: "u31-11", matiere: "u31", num: "02", title: "Configurations géométriques",      sub: "Périmètres, aires, volumes (surfaces, béton)",    file: "content/u31-maths/11-configurations-geometriques.md" },
    { id: "u31-12", matiere: "u31", num: "03", title: "Algorithmique & bases de données", sub: "Algorithmes, boucles, SQL",                       file: "content/u31-maths/12-algorithmique-sql.md" },
    { id: "u31-09", matiere: "u31", num: "04", title: "Calcul vectoriel",                sub: "Produit scalaire, géométrie",                     file: "content/u31-maths/09-calcul-vectoriel.md" },
    { id: "u31-02", matiere: "u31", num: "05", title: "Fonctions d'une variable",        sub: "Dérivation, variations, exp et ln",               file: "content/u31-maths/02-fonctions.md" },
    { id: "u31-01", matiere: "u31", num: "06", title: "Suites numériques",               sub: "Arithmétiques, géométriques, intérêts composés",  file: "content/u31-maths/01-suites-numeriques.md" },
    { id: "u31-06", matiere: "u31", num: "07", title: "Probabilités 1",                  sub: "Conditionnelle, loi binomiale",                   file: "content/u31-maths/06-probabilites-1.md" },
    { id: "u31-05", matiere: "u31", num: "08", title: "Statistique descriptive",         sub: "Moyenne, écart-type, ajustement affine",          file: "content/u31-maths/05-statistique-descriptive.md" },
    { id: "u31-04", matiere: "u31", num: "09", title: "Équations différentielles",       sub: "1er ordre y' = ay + b",                           file: "content/u31-maths/04-equations-differentielles.md" },
    { id: "u31-03", matiere: "u31", num: "10", title: "Calcul intégral",                 sub: "Primitives, intégrale, aire, valeur moyenne",     file: "content/u31-maths/03-calcul-integral.md" },

    // ---- U32 Physique-Chimie (ordre = programme officiel, thèmes 1 à 3) ----
    { id: "u32-meth", matiere: "u32", num: "★",  title: "Méthode de l'épreuve EXPÉRIMENTALE", sub: "Démarche labo, protocole, incertitudes",       file: "content/u32-physique-chimie/08-demarche-experimentale.md" },
    { id: "u32-secu", matiere: "u32", num: "01", title: "Sécurité & environnement",       sub: "REACH, pictogrammes, FDS — thème 1.1",            file: "content/u32-physique-chimie/01-securite-environnement.md" },
    { id: "u32-sol",  matiere: "u32", num: "02", title: "Constitution & solutions",       sub: "Concentration, pH, béton — thèmes 1.2/1.3",       file: "content/u32-physique-chimie/02-constitution-solutions.md" },
    { id: "u32-redox",matiere: "u32", num: "03", title: "Oxydo-réduction & corrosion",    sub: "Piles, Nernst, corrosion béton armé — 1.3",       file: "content/u32-physique-chimie/03-oxydoreduction-corrosion.md" },
    { id: "u32-synth",matiere: "u32", num: "04", title: "Synthèses & cinétique",          sub: "Chaux, organique, polymères, catalyse — 1.4/1.5", file: "content/u32-physique-chimie/04-syntheses-cinetique.md" },
    { id: "u32-thermo",matiere: "u32",num: "05", title: "Thermodynamique",               sub: "Gaz parfait, changements d'état, rosée — 2.1/2.2",file: "content/u32-physique-chimie/05-thermodynamique.md" },
    { id: "u32-transf",matiere: "u32",num: "06", title: "Transferts & rayonnement",       sub: "R, U, déperditions, rayonnement — thèmes 2.3/2.4",file: "content/u32-physique-chimie/06-transferts-rayonnement.md" },
    { id: "u32-ondes",matiere: "u32", num: "07", title: "Ondes acoustiques, EM & lumière",sub: "dB, spectre EM, éclairement — thèmes 3.1/3.2/3.3",file: "content/u32-physique-chimie/07-ondes-lumiere.md" },
  ],
};
