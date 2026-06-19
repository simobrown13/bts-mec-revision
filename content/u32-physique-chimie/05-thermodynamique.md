# Thermodynamique : pression, gaz & changements d'état

> **Thèmes officiels 2.1 + 2.2** — Pression et gaz parfait, **dilatation thermique** des matériaux, **changements d'état** et **air humide** (point de rosée / condensation).

## Pression
- **Force de pression** : $F = p \times S$ (p en Pa, S en m², F en N). $1\ \text{bar} = 10^{5}\ \text{Pa}$.
- **Pression** = force répartie sur une surface : $p = \dfrac{F}{S}$.

## Gaz parfait
$$p\,V = n\,R\,T$$
avec $T$ en **kelvin** ($T(\text{K}) = \theta(°\text{C}) + 273{,}15$), $R = 8{,}314\ \text{J·mol}^{-1}\text{·K}^{-1}$.
- Permet de relier pression, volume, quantité de matière et température d'un gaz.

## Dilatation thermique
- Les matériaux se **dilatent** quand la température augmente.
- Variation de longueur : $\Delta L = \alpha \, L_0 \, \Delta\theta$ ($\alpha$ = coefficient de dilatation linéaire).
- **Enjeu construction** : joints de dilatation pour absorber les variations dimensionnelles.

## Changements d'état d'un corps pur
- Les 6 changements : **fusion / solidification**, **vaporisation / liquéfaction**, **sublimation / condensation**.
- **Diagramme (T, P)** d'un corps pur : zones solide/liquide/gaz séparées par des courbes d'équilibre.
- **Courbe d'analyse thermique** : palier de température pendant le changement d'état.

## Air humide & point de rosée (confort/bâtiment)
- L'air contient de la **vapeur d'eau** ; la **pression de vapeur saturante** est le maximum que l'air peut contenir à une température donnée.
- **Point de rosée** : température à laquelle l'air atteint la saturation (humidité relative 100 %) → la vapeur **se condense**.
- **Conséquences** : buée sur vitres froides, **condensation dans les parois** → risques d'humidité et de moisissures.

## Capacités exigibles (référentiel)
- Exploiter $F = p\,S$ ; utiliser l'équation d'état du **gaz parfait** (masse volumique à T, P données).
- Utiliser/déterminer le **coefficient de dilatation** linéaire d'un matériau.
- Nommer les changements d'état ; **interpréter le diagramme (T,P)** ; exploiter une courbe d'analyse thermique.
- Exploiter la **condition de condensation** d'un air humide ; déterminer la **température de condensation** (point de rosée), éventuellement par lecture graphique.

> **Réflexe** — Toujours mettre la **température en kelvin** dans la loi des gaz parfaits. Pour la condensation : comparer la température de la paroi au **point de rosée** de l'air.

## Exemple résolu
**Une poutre métallique de $12\ \text{m}$ ($\alpha = 12\times10^{-6}\ \text{°C}^{-1}$) passe de $5\,°\text{C}$ à $35\,°\text{C}$. De combien s'allonge-t-elle ?**

1. **Données** : $L_0 = 12\ \text{m}$, $\Delta\theta = 35 - 5 = 30\,°\text{C}$, $\alpha = 12\times10^{-6}$.
2. **Formule** : $\Delta L = \alpha\,L_0\,\Delta\theta$.
3. **Calcul** : $\Delta L = 12\times10^{-6} \times 12 \times 30 = 4{,}32\times10^{-3}\ \text{m} \approx \mathbf{4{,}3\ mm}$.

> Quelques millimètres sur 12 m : c'est faible, mais cumulé sur une structure ça justifie les **joints de dilatation**.

## À toi de jouer

**Exercice 1.** Convertir $20\,°\text{C}$ en kelvin, puis $310\ \text{K}$ en degrés Celsius.

<details class="corrige">
<summary>Corrigé</summary>

$T = 20 + 273{,}15 = \mathbf{293{,}15\ K}$ ; $\theta = 310 - 273{,}15 = \mathbf{36{,}85\,°C}$.

</details>

**Exercice 2.** Une force de $500\ \text{N}$ s'applique sur une surface de $0{,}25\ \text{m}^2$. Quelle pression (en Pa et en bar) ?

<details class="corrige">
<summary>Corrigé</summary>

$p = \dfrac{F}{S} = \dfrac{500}{0{,}25} = 2\,000\ \text{Pa}$. En bar : $\dfrac{2\,000}{10^5} = \mathbf{0{,}02\ bar}$.

</details>

**Exercice 3.** Une vitre est à $9\,°\text{C}$. L'air intérieur a un point de rosée de $12\,°\text{C}$. Y a-t-il de la buée ? Pourquoi ?

<details class="corrige">
<summary>Corrigé</summary>

La vitre ($9\,°\text{C}$) est **plus froide** que le point de rosée ($12\,°\text{C}$) : l'air au contact atteint la saturation et la vapeur **se condense** → **oui, de la buée** se forme sur la vitre.

</details>
