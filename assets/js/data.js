/* =========================================================================
   Banque QCM + flashcards.
   Math en LaTeX entre $...$ (rendu KaTeX). answer = index de la bonne option.
   ========================================================================= */
window.DATA = {

  /* ============================= QCM ================================= */
  qcm: {
    u31: [
      {
        stem: "Une suite géométrique vérifie $u_0 = 200$ et de raison $q = 1{,}05$. Que vaut $u_3$ ?",
        opts: ["$200 \\times 3 \\times 1{,}05$", "$200 \\times 1{,}05^{3} \\approx 231{,}5$", "$200 + 3 \\times 0{,}05$", "$200 \\times 1{,}05 \\times 3$"],
        answer: 1,
        explain: "Pour une suite géométrique, $u_n = u_0 \\, q^{\\,n}$. Donc $u_3 = 200 \\times 1{,}05^3 \\approx 231{,}53$."
      },
      {
        stem: "Un capital de 10 000 € est placé à intérêts composés au taux annuel de 3 %. Capital au bout de 5 ans ?",
        opts: ["$10000 \\times (1+0{,}03 \\times 5)$", "$10000 \\times 1{,}03^{5} \\approx 11593\\ €$", "$10000 + 5 \\times 300$", "$10000 \\times 0{,}03^{5}$"],
        answer: 1,
        explain: "Intérêts composés : $C_n = C_0 (1+t)^n = 10000 \\times 1{,}03^5 \\approx 11\\,593\\ €$. La 1ʳᵉ et 3ᵉ réponses sont des intérêts simples."
      },
      {
        stem: "Quelle est la dérivée de $f(x) = x^3 - 4x$ ?",
        opts: ["$3x^2 - 4$", "$x^4/4 - 2x^2$", "$3x^2 - 4x$", "$3x - 4$"],
        answer: 0,
        explain: "$(x^n)' = n x^{n-1}$ donc $(x^3)' = 3x^2$ et $(-4x)' = -4$. Soit $f'(x) = 3x^2 - 4$."
      },
      {
        stem: "Une primitive de $f(x) = \\dfrac{1}{x}$ sur $]0\\,;+\\infty[$ est :",
        opts: ["$-\\dfrac{1}{x^2}$", "$\\ln(x)$", "$\\dfrac{1}{2}x^2$", "$e^{x}$"],
        answer: 1,
        explain: "$(\\ln x)' = \\frac{1}{x}$, donc $\\ln(x)$ est une primitive de $\\frac{1}{x}$ (à une constante près)."
      },
      {
        stem: "Que vaut $\\displaystyle\\int_{0}^{2} x \\,dx$ ?",
        opts: ["$1$", "$2$", "$4$", "$\\dfrac{8}{3}$"],
        answer: 1,
        explain: "$\\int_0^2 x\\,dx = \\left[\\frac{x^2}{2}\\right]_0^2 = \\frac{4}{2} - 0 = 2$. (C'est aussi l'aire du triangle.)"
      },
      {
        stem: "La solution générale de l'équation différentielle $y' = 2y$ est :",
        opts: ["$y = 2x + K$", "$y = K e^{2x}$", "$y = K x^2$", "$y = e^{2} + K$"],
        answer: 1,
        explain: "Pour $y' = ay$, les solutions sont $y = K e^{ax}$. Ici $a = 2$ donc $y = K e^{2x}$."
      },
      {
        stem: "Pour une série statistique, l'écart-type $\\sigma$ mesure :",
        opts: ["La valeur centrale de la série", "La dispersion autour de la moyenne", "La somme des valeurs", "La valeur la plus fréquente"],
        answer: 1,
        explain: "L'écart-type quantifie la dispersion : plus il est grand, plus les valeurs sont éloignées de la moyenne. La valeur centrale = médiane, la plus fréquente = mode."
      },
      {
        stem: "Un coefficient de corrélation linéaire $r = -0{,}97$ signifie :",
        opts: ["Aucune relation entre les variables", "Forte corrélation linéaire négative", "Faible corrélation positive", "Une erreur : $r$ ne peut pas être négatif"],
        answer: 1,
        explain: "$r \\in [-1\\,;1]$. Proche de $-1$ → forte corrélation linéaire décroissante : l'ajustement affine est pertinent."
      },
      {
        stem: "$X$ suit une loi binomiale $\\mathcal{B}(n=20\\,;\\,p=0{,}1)$. Son espérance $E(X)$ vaut :",
        opts: ["$0{,}1$", "$2$", "$20$", "$1{,}8$"],
        answer: 1,
        explain: "Pour une loi binomiale, $E(X) = np = 20 \\times 0{,}1 = 2$. (Et $V(X)=np(1-p)=1{,}8$.)"
      },
      {
        stem: "Deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont orthogonaux si et seulement si :",
        opts: ["$\\vec{u} = \\vec{v}$", "$\\vec{u}\\cdot\\vec{v} = 0$", "$\\|\\vec{u}\\| = \\|\\vec{v}\\|$", "$\\vec{u}\\cdot\\vec{v} = 1$"],
        answer: 1,
        explain: "Le produit scalaire est nul si et seulement si les vecteurs (non nuls) sont perpendiculaires : $\\vec{u}\\cdot\\vec{v}=0$."
      },
      {
        stem: "Une suite arithmétique vérifie $u_0 = 5$ et de raison $r = 3$. Que vaut $u_{10}$ ?",
        opts: ["$35$", "$30$", "$53$", "$15$"],
        answer: 0,
        explain: "Suite arithmétique : $u_n = u_0 + n\\,r = 5 + 10 \\times 3 = 35$."
      },
      {
        stem: "L'équation $\\ln(x) = 2$ a pour solution :",
        opts: ["$x = 2$", "$x = e^{2} \\approx 7{,}39$", "$x = \\ln(2) \\approx 0{,}69$", "$x = 2e$"],
        answer: 1,
        explain: "$\\ln$ et $\\exp$ sont réciproques : $\\ln(x) = 2 \\iff x = e^{2} \\approx 7{,}39$."
      },
      {
        stem: "Volume d'une fondation cylindrique de rayon $r = 0{,}3\\ \\text{m}$ et de hauteur $h = 1{,}5\\ \\text{m}$ ?",
        opts: ["$\\approx 0{,}42\\ \\text{m}^3$", "$\\approx 1{,}41\\ \\text{m}^3$", "$\\approx 0{,}14\\ \\text{m}^3$", "$\\approx 2{,}83\\ \\text{m}^3$"],
        answer: 0,
        explain: "Volume d'un cylindre : $V = \\pi r^{2} h = \\pi \\times 0{,}3^{2} \\times 1{,}5 \\approx 0{,}42\\ \\text{m}^3$."
      },
      {
        stem: "Algorithme : <code>S ← 0 ; Pour i de 1 à 4 Faire S ← S + i</code>. Que vaut $S$ à la fin ?",
        opts: ["$4$", "$10$", "$24$", "$0$"],
        answer: 1,
        explain: "La boucle ajoute 1, 2, 3 puis 4 : $S = 1+2+3+4 = 10$. (On déroule la boucle pas à pas.)"
      },
      {
        stem: "Une primitive de $f(x) = 2x + 3$ est :",
        opts: ["$2$", "$x^2 + 3x$", "$x^2 + 3$", "$2x^2 + 3x$"],
        answer: 1,
        explain: "Primitive terme à terme : $\\int (2x+3)\\,dx = x^2 + 3x + C$. On vérifie en dérivant : $(x^2+3x)' = 2x+3$."
      },
      {
        stem: "Un prix de $120\\ €$ augmente de 15 %. Le nouveau prix est :",
        opts: ["$135\\ €$", "$138\\ €$", "$18\\ €$", "$102\\ €$"],
        answer: 1,
        explain: "Augmenter de 15 % : $\\times 1{,}15$. Donc $120 \\times 1{,}15 = 138\\ €$."
      },
      {
        stem: "En notation scientifique, $0{,}00042$ s'écrit :",
        opts: ["$4{,}2\\times10^{-4}$", "$42\\times10^{-5}$", "$4{,}2\\times10^{4}$", "$0{,}42\\times10^{-3}$"],
        answer: 0,
        explain: "Notation scientifique : $a\\times10^{n}$ avec $1\\leqslant a<10$. Ici $0{,}00042 = 4{,}2\\times10^{-4}$."
      },
      {
        stem: "Une hausse de 20 % suivie d'une baisse de 20 % donne au total :",
        opts: ["Le prix initial", "$-4\\,\\%$ (96 % du départ)", "$+4\\,\\%$", "$0\\ €$"],
        answer: 1,
        explain: "Coefficients successifs : $\\times 1{,}2 \\times 0{,}8 = 0{,}96$, soit une baisse globale de 4 %."
      },
      {
        stem: "Combien de litres dans $2{,}5\\ \\text{m}^3$ ?",
        opts: ["$25\\ \\text{L}$", "$250\\ \\text{L}$", "$2500\\ \\text{L}$", "$25000\\ \\text{L}$"],
        answer: 2,
        explain: "$1\\ \\text{m}^3 = 1000\\ \\text{L}$, donc $2{,}5\\ \\text{m}^3 = 2500\\ \\text{L}$."
      }
    ],

    u32: [
      {
        stem: "Une couche d'isolant d'épaisseur $e = 0{,}20\\ \\text{m}$ et de conductivité $\\lambda = 0{,}04\\ \\text{W·m}^{-1}\\text{·K}^{-1}$. Sa résistance thermique $R$ vaut :",
        opts: ["$0{,}008\\ \\text{m}^2\\text{·K/W}$", "$5\\ \\text{m}^2\\text{·K/W}$", "$0{,}2\\ \\text{m}^2\\text{·K/W}$", "$0{,}04\\ \\text{m}^2\\text{·K/W}$"],
        answer: 1,
        explain: "$R = \\dfrac{e}{\\lambda} = \\dfrac{0{,}20}{0{,}04} = 5\\ \\text{m}^2\\text{·K/W}$. Plus $R$ est grand, meilleure est l'isolation."
      },
      {
        stem: "La résistance thermique totale d'une paroi est $R_{tot} = 4\\ \\text{m}^2\\text{·K/W}$. Le coefficient de transmission $U$ vaut :",
        opts: ["$4\\ \\text{W·m}^{-2}\\text{·K}^{-1}$", "$0{,}25\\ \\text{W·m}^{-2}\\text{·K}^{-1}$", "$2\\ \\text{W·m}^{-2}\\text{·K}^{-1}$", "$8\\ \\text{W·m}^{-2}\\text{·K}^{-1}$"],
        answer: 1,
        explain: "$U = \\dfrac{1}{R_{tot}} = \\dfrac{1}{4} = 0{,}25\\ \\text{W·m}^{-2}\\text{·K}^{-1}$. On cherche $U$ le plus faible possible."
      },
      {
        stem: "Mur de $U = 0{,}3\\ \\text{W·m}^{-2}\\text{·K}^{-1}$, surface $10\\ \\text{m}^2$, écart de température $\\Delta T = 20\\ \\text{K}$. Déperdition $\\Phi$ ?",
        opts: ["$6\\ \\text{W}$", "$60\\ \\text{W}$", "$600\\ \\text{W}$", "$0{,}6\\ \\text{W}$"],
        answer: 1,
        explain: "$\\Phi = U \\times A \\times \\Delta T = 0{,}3 \\times 10 \\times 20 = 60\\ \\text{W}$."
      },
      {
        stem: "Doubler la puissance acoustique d'une source augmente le niveau sonore de :",
        opts: ["$+1\\ \\text{dB}$", "$+3\\ \\text{dB}$", "$+6\\ \\text{dB}$", "$\\times 2$ (le double en dB)"],
        answer: 1,
        explain: "L'échelle est logarithmique : $10\\log_{10}(2) \\approx 3$. Doubler la puissance → +3 dB seulement (et non un doublement du niveau)."
      },
      {
        stem: "Deux machines identiques émettent chacune $70\\ \\text{dB}$. Le niveau sonore total est environ :",
        opts: ["$140\\ \\text{dB}$", "$73\\ \\text{dB}$", "$70\\ \\text{dB}$", "$76\\ \\text{dB}$"],
        answer: 1,
        explain: "Les niveaux ne s'additionnent pas arithmétiquement. Deux sources égales : $L_{tot} = L + 3 = 73\\ \\text{dB}$."
      },
      {
        stem: "Un radiateur de $1\\,500\\ \\text{W}$ fonctionne 4 h. L'énergie consommée est :",
        opts: ["$6\\ \\text{kWh}$", "$375\\ \\text{kWh}$", "$1{,}5\\ \\text{kWh}$", "$6\\,000\\ \\text{kWh}$"],
        answer: 0,
        explain: "$E = P \\times t = 1{,}5\\ \\text{kW} \\times 4\\ \\text{h} = 6\\ \\text{kWh}$."
      },
      {
        stem: "On dissout $0{,}5\\ \\text{mol}$ de soluté dans $2\\ \\text{L}$ de solution. La concentration $C$ vaut :",
        opts: ["$1\\ \\text{mol/L}$", "$0{,}25\\ \\text{mol/L}$", "$2{,}5\\ \\text{mol/L}$", "$0{,}5\\ \\text{mol/L}$"],
        answer: 1,
        explain: "$C = \\dfrac{n}{V} = \\dfrac{0{,}5}{2} = 0{,}25\\ \\text{mol/L}$."
      },
      {
        stem: "Une solution a un $\\text{pH} = 3$. Elle est :",
        opts: ["Basique", "Acide", "Neutre", "Impossible à déterminer"],
        answer: 1,
        explain: "$\\text{pH} < 7$ → solution acide ; $=7$ neutre ; $>7$ basique. $\\text{pH}=3$ : nettement acide ($[H_3O^+]=10^{-3}\\ \\text{mol/L}$)."
      },
      {
        stem: "Quelle masse d'eau ($M = 18\\ \\text{g/mol}$) correspond à $2\\ \\text{mol}$ ?",
        opts: ["$9\\ \\text{g}$", "$36\\ \\text{g}$", "$18\\ \\text{g}$", "$20\\ \\text{g}$"],
        answer: 1,
        explain: "$n = \\dfrac{m}{M} \\Rightarrow m = n \\times M = 2 \\times 18 = 36\\ \\text{g}$."
      },
      {
        stem: "Une chaudière fournit $9\\ \\text{kWh}$ de chaleur utile en consommant $10\\ \\text{kWh}$ de gaz. Son rendement est :",
        opts: ["$1{,}11$", "$0{,}9$ soit 90 %", "$90\\ \\text{kWh}$", "$19\\ \\text{kWh}$"],
        answer: 1,
        explain: "Rendement $\\eta = \\dfrac{\\text{énergie utile}}{\\text{énergie consommée}} = \\dfrac{9}{10} = 0{,}9 = 90\\,\\%$ (sans unité, toujours $<1$)."
      },
      {
        stem: "L'air d'une pièce se refroidit et atteint son point de rosée. Que se passe-t-il ?",
        opts: ["L'air devient plus sec", "La vapeur d'eau se condense (buée, gouttelettes)", "La température remonte", "Rien, c'est sans effet"],
        answer: 1,
        explain: "Au point de rosée, l'humidité relative atteint 100 % : la vapeur d'eau excédentaire se condense. D'où la buée sur les vitres froides et les risques de condensation dans les parois."
      },
      {
        stem: "Sur une étiquette, les <b>phrases P</b> (precaution) indiquent :",
        opts: ["La nature du danger", "Les conseils de prudence", "La composition du produit", "La date de péremption"],
        answer: 1,
        explain: "Phrases <b>H</b> (hazard) = nature du danger ; phrases <b>P</b> (precaution) = conseils de prudence. On les lit sur la FDS avant de manipuler."
      },
      {
        stem: "Dans une pile, l'électrode où se produit l'<b>oxydation</b> est :",
        opts: ["La cathode (pôle +)", "L'anode (pôle −)", "Le pont salin", "L'électrolyte"],
        answer: 1,
        explain: "Oxydation = perte d'électrons = <b>anode</b> (pôle −). La réduction se fait à la cathode (pôle +)."
      },
      {
        stem: "Pourquoi l'acier d'un béton armé sain ne rouille-t-il pas ?",
        opts: ["Le béton est imperméable", "Le pH élevé du béton passive l'acier", "L'acier est inoxydable", "Il n'y a pas d'oxygène"],
        answer: 1,
        explain: "Le pH basique du béton sain forme une couche passive protectrice. La carbonatation (CO₂) ou les chlorures abaissent le pH → dépassivation → corrosion."
      },
      {
        stem: "Quel facteur <b>accélère</b> généralement une réaction chimique ?",
        opts: ["Baisser la température", "Augmenter la température", "Diluer les réactifs", "Réduire la surface de contact"],
        answer: 1,
        explain: "Facteurs cinétiques : ↑ température et ↑ concentration accélèrent la réaction. Un catalyseur aussi (sans être consommé)."
      },
      {
        stem: "L'extinction de la chaux ($\\text{CaO} + \\text{H}_2\\text{O}$) est une réaction :",
        opts: ["Endothermique (absorbe de la chaleur)", "Exothermique (dégage de la chaleur)", "Sans échange thermique", "Photochimique"],
        answer: 1,
        explain: "L'extinction de la chaux vive dégage de la chaleur : réaction <b>exothermique</b>."
      },
      {
        stem: "Dans le vide, les ondes électromagnétiques se propagent à environ :",
        opts: ["$340\\ \\text{m/s}$", "$3\\times10^{8}\\ \\text{m/s}$", "$1500\\ \\text{m/s}$", "Elles ne se propagent pas dans le vide"],
        answer: 1,
        explain: "Célérité de la lumière dans le vide : $c \\approx 3\\times10^{8}\\ \\text{m/s}$. (Le son, lui, ne se propage pas dans le vide.)"
      },
      {
        stem: "L'éclairement lumineux se mesure en lux avec un luxmètre. Si on éloigne le capteur de la source, l'éclairement :",
        opts: ["Augmente", "Diminue", "Reste constant", "Devient négatif"],
        answer: 1,
        explain: "$E = \\dfrac{\\Phi}{S}$ : plus on s'éloigne, plus le flux se répartit sur une grande surface, donc l'éclairement <b>diminue</b>."
      },
      {
        stem: "La synthèse <b>additive</b> des couleurs (lumières) combine :",
        opts: ["Cyan, magenta, jaune", "Rouge, vert, bleu", "Noir et blanc", "Les pigments d'une peinture"],
        answer: 1,
        explain: "Additive = lumières <b>R + V + B</b> → blanc. La synthèse soustractive (pigments/filtres) utilise cyan, magenta, jaune."
      }
    ]
  },

  /* ========================== FLASHCARDS ============================= */
  flash: {
    u31: [
      { q: "Terme général d'une suite arithmétique de raison $r$", a: "$u_n = u_0 + n\\,r$" },
      { q: "Terme général d'une suite géométrique de raison $q$", a: "$u_n = u_0 \\, q^{\\,n}$" },
      { q: "Somme des $n$ premiers entiers $1+2+\\dots+n$", a: "$\\dfrac{n(n+1)}{2}$" },
      { q: "Somme géométrique $1+q+\\dots+q^{n}$ (si $q\\neq1$)", a: "$\\dfrac{1-q^{\\,n+1}}{1-q}$" },
      { q: "Capital à intérêts composés après $n$ périodes", a: "$C_n = C_0 (1+t)^{n}$" },
      { q: "Dérivée de $x^n$", a: "$n\\,x^{\\,n-1}$" },
      { q: "Dérivée de $e^{x}$ et de $\\ln(x)$", a: "$(e^x)' = e^x$  ·  $(\\ln x)' = \\dfrac{1}{x}$" },
      { q: "Dérivée d'un produit $uv$", a: "$(uv)' = u'v + uv'$" },
      { q: "Lien dérivée / variation", a: "$f' > 0 \\Rightarrow f$ croissante  ·  $f' < 0 \\Rightarrow f$ décroissante" },
      { q: "Valeur moyenne d'une fonction sur $[a;b]$", a: "$\\dfrac{1}{b-a}\\displaystyle\\int_a^b f(t)\\,dt$" },
      { q: "Solutions de $y' = ay + b$", a: "$y = K e^{ax} - \\dfrac{b}{a}$" },
      { q: "Espérance et variance d'une loi binomiale $\\mathcal{B}(n,p)$", a: "$E(X)=np$  ·  $V(X)=np(1-p)$" },
      { q: "Coefficient directeur de la droite des moindres carrés", a: "$a = \\dfrac{\\text{cov}(x,y)}{V(x)}$, puis $b=\\bar{y}-a\\bar{x}$" },
      { q: "Produit scalaire dans un repère orthonormé", a: "$\\vec{u}\\cdot\\vec{v} = x x' + y y'$ ; nul si orthogonaux" },
      { q: "Augmenter / diminuer de $t\\%$ (coefficient)", a: "$\\times(1+\\tfrac{t}{100})$ pour une hausse  ·  $\\times(1-\\tfrac{t}{100})$ pour une baisse" },
      { q: "Notation scientifique d'un nombre", a: "$a\\times10^{n}$ avec $1\\leqslant a<10$ (ex. $13\\,500 = 1{,}35\\times10^{4}$)" },
      { q: "Conversions d'aire et de volume", a: "$1\\ \\text{m}^2=10^{4}\\ \\text{cm}^2$  ·  $1\\ \\text{m}^3=1000\\ \\text{L}=10^{6}\\ \\text{cm}^3$" },
      { q: "Aires et volumes utiles (chantier)", a: "Disque $\\pi r^2$  ·  Cylindre $\\pi r^2 h$  ·  Cône $\\tfrac{1}{3}\\pi r^2 h$" },
      { q: "Requête SQL de base", a: "$\\texttt{SELECT col FROM table WHERE cond ORDER BY col}$" }
    ],

    u32: [
      { q: "Résistance thermique d'une couche", a: "$R = \\dfrac{e}{\\lambda}$  (m²·K/W) — $e$ épaisseur, $\\lambda$ conductivité" },
      { q: "Coefficient de transmission surfacique $U$", a: "$U = \\dfrac{1}{R_{tot}}$  (W·m⁻²·K⁻¹) — à minimiser" },
      { q: "Flux de déperdition à travers une paroi", a: "$\\Phi = U \\cdot A \\cdot \\Delta T$  (W)" },
      { q: "Les 3 modes de transfert thermique", a: "Conduction · convection · rayonnement" },
      { q: "Niveau sonore en décibels", a: "$L = 10\\log_{10}\\!\\left(\\dfrac{I}{I_0}\\right)$, avec $I_0 = 10^{-12}\\ \\text{W/m}^2$" },
      { q: "Effet de doubler la puissance acoustique", a: "$+3\\ \\text{dB}$ (échelle logarithmique)" },
      { q: "Addition de deux sources de même niveau $L$", a: "$L_{tot} = L + 3\\ \\text{dB}$" },
      { q: "Énergie et puissance (rendement)", a: "$E = P \\, t$  ·  rendement $\\eta = \\dfrac{\\text{utile}}{\\text{consommé}}$  ·  $1\\ \\text{kWh}=3{,}6\\ \\text{MJ}$" },
      { q: "Quantité de matière (mole)", a: "$n = \\dfrac{m}{M}$  ·  concentration $C = \\dfrac{n}{V}$" },
      { q: "Définition du pH", a: "$\\text{pH} = -\\log_{10}[H_3O^+]$  ·  acide si $<7$, basique si $>7$" },
      { q: "Corrosion des armatures du béton armé", a: "Carbonatation / chlorures abaissent le pH → l'acier se dépassive et rouille" },
      { q: "Étiquetage : phrases H et P", a: "H (hazard) = nature du danger  ·  P (precaution) = conseils de prudence (lire la FDS)" },
      { q: "Masse volumique", a: "$\\rho = \\dfrac{m}{V}$  ·  eau $= 1000\\ \\text{kg/m}^3 = 1\\ \\text{g/cm}^3$" },
      { q: "Dilution d'une solution", a: "$C_1 V_1 = C_2 V_2$ (la quantité de soluté se conserve)" },
      { q: "Anode et cathode d'une pile", a: "Anode = oxydation (pôle −)  ·  Cathode = réduction (pôle +)" },
      { q: "Monomère / polymère", a: "Monomère = motif de base répété ; polymère = longue chaîne. Thermoplastique vs thermodurcissable" },
      { q: "Catalyseur", a: "Accélère la réaction sans être consommé (catalyse homogène / hétérogène / enzymatique)" },
      { q: "Équation d'état du gaz parfait", a: "$pV = nRT$  ·  $T$ en kelvin ($T = \\theta + 273{,}15$)" },
      { q: "Dilatation thermique linéaire", a: "$\\Delta L = \\alpha\\, L_0\\, \\Delta\\theta$  (d'où les joints de dilatation)" },
      { q: "Relation onde : célérité, $\\lambda$, fréquence", a: "$v = \\lambda f$  ·  son ≈ $340\\ \\text{m/s}$ dans l'air" },
      { q: "Ondes électromagnétiques (vide) & photon", a: "$c \\approx 3\\times10^{8}\\ \\text{m/s}$  ·  $E = h f$ (énergie d'un photon)" },
      { q: "Éclairement lumineux", a: "$E = \\dfrac{\\Phi}{S}$ (lux), mesuré au luxmètre ; diminue avec la distance" },
      { q: "Synthèse des couleurs", a: "Additive (lumières) : R+V+B → blanc  ·  Soustractive (pigments/filtres) : cyan, magenta, jaune" },
      { q: "Lois du rayonnement (corps noir)", a: "Wien (λ d'émission max ↔ T) et Stefan-Boltzmann (puissance $\\propto T^4$) — fournies" }
    ]
  }
};
