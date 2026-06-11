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
      epreuve: "Écrit · mardi 23 / mercredi 24 juin 2026",
      salle: "L027 / L026",
      cls: "u31",
    },
    u32: {
      code: "U3.2",
      nom: "Physique-Chimie",
      coef: 2,
      epreuve: "Écrit · mardi 23 juin 2026 · 08:00",
      salle: "A116 (à confirmer)",
      cls: "u32",
    },
  },

  fiches: [
    // ---- U31 Mathématiques ----
    { id: "u31-01", matiere: "u31", num: "01", title: "Suites numériques",            sub: "Arithmétiques, géométriques, intérêts composés", file: "content/u31-maths/01-suites-numeriques.md" },
    { id: "u31-02", matiere: "u31", num: "02", title: "Fonctions d'une variable",      sub: "Dérivation, variations, exp et ln",              file: "content/u31-maths/02-fonctions.md" },
    { id: "u31-03", matiere: "u31", num: "03", title: "Calcul intégral",               sub: "Primitives, intégrale, aire, valeur moyenne",    file: "content/u31-maths/03-calcul-integral.md" },
    { id: "u31-04", matiere: "u31", num: "04", title: "Équations différentielles",     sub: "1er ordre y' = ay + b",                          file: "content/u31-maths/04-equations-differentielles.md" },
    { id: "u31-05", matiere: "u31", num: "05", title: "Statistique descriptive",       sub: "Moyenne, écart-type, ajustement affine",         file: "content/u31-maths/05-statistique-descriptive.md" },
    { id: "u31-06", matiere: "u31", num: "06", title: "Probabilités 1",                sub: "Conditionnelle, loi binomiale",                  file: "content/u31-maths/06-probabilites-1.md" },
    { id: "u31-07", matiere: "u31", num: "07", title: "Probabilités 2",                sub: "Loi de Poisson, loi normale",                    file: "content/u31-maths/07-probabilites-2.md" },
    { id: "u31-08", matiere: "u31", num: "08", title: "Statistique inférentielle",     sub: "Estimation, intervalle de confiance",            file: "content/u31-maths/08-statistique-inferentielle.md" },
    { id: "u31-09", matiere: "u31", num: "09", title: "Calcul vectoriel",              sub: "Produit scalaire, géométrie",                    file: "content/u31-maths/09-calcul-vectoriel.md" },

    // ---- U32 Physique-Chimie ----
    { id: "u32-01", matiere: "u32", num: "01", title: "Thermique du bâtiment",         sub: "Résistance R, coefficient U, déperditions",      file: "content/u32-physique-chimie/01-thermique-batiment.md" },
    { id: "u32-02", matiere: "u32", num: "02", title: "Acoustique du bâtiment",        sub: "Décibels, isolement, échelle log",               file: "content/u32-physique-chimie/02-acoustique.md" },
    { id: "u32-03", matiere: "u32", num: "03", title: "Mécanique & statique",          sub: "Forces, moments, équilibre, contrainte",         file: "content/u32-physique-chimie/03-mecanique-statique.md" },
    { id: "u32-04", matiere: "u32", num: "04", title: "Hygrométrie & confort",         sub: "Humidité, point de rosée, condensation",         file: "content/u32-physique-chimie/04-hygrometrie-confort.md" },
    { id: "u32-05", matiere: "u32", num: "05", title: "Électricité",                   sub: "U=RI, puissance, énergie",                       file: "content/u32-physique-chimie/05-electricite.md" },
    { id: "u32-06", matiere: "u32", num: "06", title: "Chimie des matériaux",          sub: "Mole, pH, béton, corrosion",                     file: "content/u32-physique-chimie/06-chimie-materiaux.md" },
    { id: "u32-07", matiere: "u32", num: "07", title: "Énergétique & DPE",             sub: "Rendement, énergie primaire, kWh",               file: "content/u32-physique-chimie/07-energetique-dpe.md" },
  ],
};
