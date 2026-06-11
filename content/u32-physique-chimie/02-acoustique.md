# Acoustique du bâtiment

> **Objectif** — Manipuler les niveaux sonores en décibels (échelle logarithmique) et comprendre l'isolement acoustique.

## Niveau d'intensité sonore
$$L = 10\,\log_{10}\!\left(\frac{I}{I_0}\right)\quad (\text{dB})$$
avec $I_0 = 10^{-12}\ \text{W·m}^{-2}$ (seuil d'audibilité).

## Conséquences de l'échelle log
- **Doubler** la puissance acoustique → **+3 dB** ($10\log 2 \approx 3$).
- **Multiplier par 10** la puissance → **+10 dB**.
- Deux sources **identiques** de niveau $L$ → $L_{tot} = L + 3\ \text{dB}$.
- En champ libre, **doubler la distance** → **−6 dB**.

## Addition de deux niveaux différents
On repasse aux intensités : $I = I_0 \times 10^{L/10}$, on additionne, puis on reconvertit en dB. (Deux niveaux écartés de +10 dB : le plus faible est quasi négligeable.)

## Isolement acoustique
- **Affaiblissement** d'une paroi $R_w$ (dB) : capacité à atténuer le bruit aérien.
- Isolement $D = L_{\text{émission}} - L_{\text{réception}}$.

> **Piège** — Les décibels **ne s'additionnent jamais arithmétiquement** : $70 + 70 \neq 140\ \text{dB}$, mais $\approx 73\ \text{dB}$.
