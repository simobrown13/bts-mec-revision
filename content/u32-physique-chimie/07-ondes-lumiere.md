# Ondes : acoustiques, électromagnétiques & lumière

> **Thèmes officiels 3.1 + 3.2 + 3.3** — Acoustique du bâtiment, ondes électromagnétiques, et **lumière / couleurs / éclairement**.

## Ondes acoustiques (3.1)
- Une **onde sonore** = propagation d'une vibration mécanique (surpression) dans un milieu. Le **vide** ne transmet pas le son.
- **Célérité** : ≈ **340 m/s** dans l'air, plus élevée dans l'eau et les solides.
- Relation : $v = \lambda \times f$ (célérité = longueur d'onde × fréquence). Période $T = \dfrac{1}{f}$.
- **Sons audibles** : ≈ 20 Hz – 20 kHz ; au-delà = **ultrasons**.
- **Niveau sonore** : $L = 10\log_{10}\!\left(\dfrac{I}{I_0}\right)$ dB, avec $I_0 = 10^{-12}\ \text{W/m}^2$. Échelle **logarithmique** :
  - doubler la puissance → **+3 dB** ; deux sources égales de niveau $L$ → $L + 3$ dB.
- **Réflexion / transmission / absorption** à une interface (isolation et correction acoustique).
- **Réverbération** : durée via la **formule de Sabine** (fournie).

## Ondes électromagnétiques (3.2)
- Se propagent **dans le vide** à $c \approx 3\times10^{8}\ \text{m/s}$. Relation $c = \lambda \times f$.
- **Spectre EM** (par longueur d'onde croissante) : rayons γ, X, **UV**, **visible**, **IR**, micro-ondes, ondes radio.
- **Photon** : grain de lumière d'énergie $E = h\,f$ (h fournie). Interaction lumière-matière : **absorption, émission, diffusion**.

## Sources lumineuses & couleurs (3.3)
- **Sources** caractérisées par leur **spectre** : laser (raie unique), LED, lampe à incandescence (spectre continu), lampe spectrale (raies).
- **Filtre** : absorbe certaines longueurs d'onde, transmet les autres.
- **Couleur des objets** : dépend de la lumière incidente et de l'**absorption / diffusion / transmission** par la surface.
- **Synthèse additive** (lumières : R+V+B → blanc) vs **soustractive** (pigments/filtres : cyan, magenta, jaune).
- **Flux & éclairement lumineux** : éclairement $E = \dfrac{\Phi}{S}$ (lux), mesuré au **luxmètre** ; diminue avec la distance à la source.

## Capacités exigibles (référentiel)
- Modéliser une onde acoustique ; utiliser $v = \lambda f$ ; exploiter la relation **niveau ↔ intensité** ; calculer les niveaux réfléchis/transmis ; déterminer un temps de **réverbération** (Sabine).
- Citer $c$ dans le vide ; placer les domaines du **spectre EM** ; exploiter $c = \lambda f$ et $E = h f$ (photon) ; décrire absorption/émission/diffusion.
- Caractériser des **sources** par leur spectre ; associer longueur d'onde ↔ couleur ; analyser l'effet d'un **filtre** ; déterminer un **éclairement** (luxmètre) ; prévoir les résultats de **synthèse additive/soustractive** et la couleur d'un objet.

> **Réflexe** — Acoustique : penser **logarithme** (les dB ne s'additionnent pas). Couleur : distinguer **synthèse additive** (lumières) et **soustractive** (pigments/filtres).

## Exemple résolu
**Un atelier comporte 4 machines identiques, chacune produisant $74\ \text{dB}$. Quel est le niveau sonore total quand elles fonctionnent ensemble ?**

1. **Principe** : les décibels **ne s'additionnent pas** arithmétiquement (échelle log). Doubler le nombre de sources égales ajoute **+3 dB**.
2. **2 machines** : $74 + 3 = 77\ \text{dB}$.
3. **4 machines** (encore ×2) : $77 + 3 = \mathbf{80\ dB}$.

> Erreur classique à éviter : $4\times74 = 296\ \text{dB}$ n'a aucun sens. On raisonne par **doublements successifs** (+3 dB chacun).

## À toi de jouer

**Exercice 1.** Un son a une fréquence $f = 680\ \text{Hz}$ dans l'air ($v = 340\ \text{m/s}$). Quelle est sa longueur d'onde ?

<details class="corrige">
<summary>Corrigé</summary>

$v = \lambda f \Rightarrow \lambda = \dfrac{v}{f} = \dfrac{340}{680} = \mathbf{0{,}5\ m}$.

</details>

**Exercice 2.** Deux ventilateurs identiques émettent chacun $60\ \text{dB}$. Niveau total ?

<details class="corrige">
<summary>Corrigé</summary>

Deux sources égales : $L_{tot} = L + 3 = 60 + 3 = \mathbf{63\ dB}$ (et non 120 dB).

</details>

**Exercice 3.** Sous un projecteur, un capteur reçoit un flux de $500\ \text{lm}$ sur une surface de $4\ \text{m}^2$. Quel est l'éclairement (en lux) ?

<details class="corrige">
<summary>Corrigé</summary>

$E = \dfrac{\Phi}{S} = \dfrac{500}{4} = \mathbf{125\ lux}$. Si on éloigne le capteur, l'éclairement diminue.

</details>
