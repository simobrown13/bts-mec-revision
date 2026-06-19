# Transferts thermiques & rayonnement

> **Thèmes officiels 2.3 + 2.4** — Le cœur de la filière construction : **résistance/transmission thermique**, déperditions, et **rayonnement thermique**.

## Énergie et puissance thermique
- $E = P \times t$ (énergie en J ou kWh ; $1\ \text{kWh} = 3{,}6\ \text{MJ}$).
- **Rendement** d'un système : $\eta = \dfrac{\text{énergie utile}}{\text{énergie consommée}}$ (sans unité, $<1$).
- Le transfert thermique va **toujours du chaud vers le froid**.

## Les 3 modes de transfert
- **Conduction** : de proche en proche dans un solide.
- **Convection** : par mouvement d'un fluide (air, eau).
- **Rayonnement** : par ondes électromagnétiques, sans contact.

## Résistance & transmission thermiques
- **Résistance d'une couche** : $R = \dfrac{e}{\lambda}$ (m²·K/W) — $e$ épaisseur, $\lambda$ conductivité. Plus $R$ est grand, mieux ça isole.
- **Coefficient de transmission surfacique** : $U = \dfrac{1}{R_{tot}}$ (W·m⁻²·K⁻¹) — à **minimiser**.
- **Associations** : couches **en série** → $R_{tot} = R_1 + R_2 + \dots$ (résistances s'ajoutent).
- **Conducto-convection** paroi/air : résistances superficielles $R_{si}, R_{se}$ à ajouter.
- **Flux de déperdition** à travers une paroi : $\Phi = U \times A \times \Delta T$ (W).

## Rayonnement thermique (2.4)
- Tout corps émet un **rayonnement thermique** ; à prendre en compte dans certains bilans.
- **Corps noir** : la **loi de Wien** (fournie) relie la longueur d'onde d'émission max à la température ; la **loi de Stefan-Boltzmann** (fournie) donne la puissance émise par unité de surface ($\propto T^4$).
- **Émissivité** : aptitude d'une surface à émettre ; comparée à la **caméra thermique**.

## Capacités exigibles (référentiel)
- Exploiter $E = P\,t$ ; prévoir le **sens** d'un transfert ; décrire les **3 modes**.
- Exploiter $\Phi$, $R$, $U$ ; relier $R$ aux dimensions et à $\lambda$ ; **associer** des résistances en série/parallèle ; déterminer la résistance d'une paroi multicouche.
- Évaluer un transfert **conducto-convectif** ; réaliser un **bilan thermique** d'enceinte en régime stationnaire (expérimental).
- Identifier les situations où le **rayonnement** compte ; exploiter **Wien** et **Stefan-Boltzmann** (fournies) ; comparer l'**émissivité** de matériaux (caméra thermique).

> **Réflexe chantier** — Mur multicouche : additionner les $R$ de chaque couche (+ $R_{si}+R_{se}$), puis $U = 1/R_{tot}$, puis $\Phi = U\,A\,\Delta T$. On cherche $U$ **faible**.

## Exemple résolu
**Un mur est composé de $20\ \text{cm}$ de béton ($\lambda = 1{,}6$) et $12\ \text{cm}$ de laine minérale ($\lambda = 0{,}04$). Surface $15\ \text{m}^2$, écart $\Delta T = 18\ \text{K}$. Calculer $U$ et la déperdition $\Phi$ (on néglige $R_{si}, R_{se}$).**

1. **Résistances** (épaisseurs en m) :
   - Béton : $R_1 = \dfrac{0{,}20}{1{,}6} = 0{,}125\ \text{m}^2\text{·K/W}$.
   - Laine : $R_2 = \dfrac{0{,}12}{0{,}04} = 3{,}0\ \text{m}^2\text{·K/W}$.
2. **En série** : $R_{tot} = 0{,}125 + 3{,}0 = 3{,}125\ \text{m}^2\text{·K/W}$.
3. **Transmission** : $U = \dfrac{1}{R_{tot}} = \dfrac{1}{3{,}125} \approx 0{,}32\ \text{W·m}^{-2}\text{·K}^{-1}$.
4. **Déperdition** : $\Phi = U\,A\,\Delta T = 0{,}32 \times 15 \times 18 \approx \mathbf{86\ W}$.

> On voit que c'est la **laine** (R = 3) qui isole, pas le béton (R = 0,125) : l'isolant fait tout le travail.

## À toi de jouer

**Exercice 1.** Résistance thermique d'une couche de polystyrène de $10\ \text{cm}$, $\lambda = 0{,}035$ ?

<details class="corrige">
<summary>Corrigé</summary>

$R = \dfrac{e}{\lambda} = \dfrac{0{,}10}{0{,}035} \approx \mathbf{2{,}86\ m^2\text{·}K/W}$.

</details>

**Exercice 2.** Une paroi de $U = 0{,}25$, surface $20\ \text{m}^2$, $\Delta T = 15\ \text{K}$. Déperdition ?

<details class="corrige">
<summary>Corrigé</summary>

$\Phi = U A \Delta T = 0{,}25 \times 20 \times 15 = \mathbf{75\ W}$.

</details>

**Exercice 3.** Un convecteur de $2\ \text{kW}$ fonctionne 5 h par jour. Énergie consommée en une journée (kWh) ?

<details class="corrige">
<summary>Corrigé</summary>

$E = P\,t = 2\ \text{kW} \times 5\ \text{h} = \mathbf{10\ kWh}$ (soit $36\ \text{MJ}$).

</details>
