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
    // ---- U31 Mathématiques (ordre = programme officiel) ----
    { id: "u31-10", matiere: "u31", num: "★",  title: "Méthode de l'épreuve ORALE",     sub: "1h prépa + exposé 15 min + entretien 20 min",     file: "content/u31-maths/10-methode-oral.md" },
    { id: "u31-11", matiere: "u31", num: "01", title: "Configurations géométriques",     sub: "Périmètres, aires, volumes (surfaces, béton)",    file: "content/u31-maths/11-configurations-geometriques.md" },
    { id: "u31-12", matiere: "u31", num: "02", title: "Algorithmique & bases de données", sub: "Algorithmes, boucles, SQL — souvent oublié",     file: "content/u31-maths/12-algorithmique-sql.md" },
    { id: "u31-09", matiere: "u31", num: "03", title: "Calcul vectoriel",              sub: "Produit scalaire, géométrie",                    file: "content/u31-maths/09-calcul-vectoriel.md" },
    { id: "u31-02", matiere: "u31", num: "04", title: "Fonctions d'une variable",      sub: "Dérivation, variations, exp et ln",              file: "content/u31-maths/02-fonctions.md" },
    { id: "u31-01", matiere: "u31", num: "05", title: "Suites numériques",            sub: "Arithmétiques, géométriques, intérêts composés", file: "content/u31-maths/01-suites-numeriques.md" },
    { id: "u31-06", matiere: "u31", num: "06", title: "Probabilités 1",                sub: "Conditionnelle, loi binomiale",                  file: "content/u31-maths/06-probabilites-1.md" },
    { id: "u31-05", matiere: "u31", num: "07", title: "Statistique descriptive",       sub: "Moyenne, écart-type, ajustement affine",         file: "content/u31-maths/05-statistique-descriptive.md" },
    { id: "u31-04", matiere: "u31", num: "08", title: "Équations différentielles",     sub: "1er ordre y' = ay + b",                          file: "content/u31-maths/04-equations-differentielles.md" },
    { id: "u31-03", matiere: "u31", num: "09", title: "Calcul intégral",               sub: "Primitives, intégrale, aire, valeur moyenne",    file: "content/u31-maths/03-calcul-integral.md" },

    // ---- U32 Physique-Chimie (ordre = programme officiel) ----
    { id: "u32-08", matiere: "u32", num: "★",  title: "Méthode de l'épreuve EXPÉRIMENTALE", sub: "Démarche labo, protocole, incertitudes",          file: "content/u32-physique-chimie/08-demarche-experimentale.md" },
    { id: "u32-06", matiere: "u32", num: "01", title: "Chimie & matière",              sub: "Mole, concentration, pH, béton, corrosion",      file: "content/u32-physique-chimie/06-chimie-materiaux.md" },
    { id: "u32-01", matiere: "u32", num: "02", title: "Transferts thermiques",         sub: "Résistance R, coefficient U, déperditions",      file: "content/u32-physique-chimie/01-thermique-batiment.md" },
    { id: "u32-04", matiere: "u32", num: "03", title: "Changements d'état & hygrométrie", sub: "Humidité, point de rosée, condensation",       file: "content/u32-physique-chimie/04-hygrometrie-confort.md" },
    { id: "u32-07", matiere: "u32", num: "04", title: "Énergie & puissance",           sub: "Rendement, énergie, kWh",                        file: "content/u32-physique-chimie/07-energetique-dpe.md" },
    { id: "u32-02", matiere: "u32", num: "05", title: "Ondes acoustiques",             sub: "Décibels, isolement, échelle log",               file: "content/u32-physique-chimie/02-acoustique.md" },
  ],
};
