# Thermique du bâtiment

> **Objectif** — Quantifier l'isolation d'une paroi (résistance $R$, coefficient $U$) et les déperditions de chaleur. Notion centrale de la RE2020.

## Trois modes de transfert
- **Conduction** : dans les solides (parois). Décrite par $\lambda$.
- **Convection** : par un fluide en mouvement (air).
- **Rayonnement** : ondes électromagnétiques (soleil, parois chaudes).

## Résistance thermique d'une couche
$$R = \frac{e}{\lambda}\quad (\text{m}^2\text{·K·W}^{-1})$$
- $e$ = épaisseur (m), $\lambda$ = conductivité thermique (W·m⁻¹·K⁻¹).
- $\lambda$ **faible** = bon isolant (laine, polystyrène). $\lambda$ **élevé** = bon conducteur (béton, métal).
- Couches en série : $R_{tot} = R_1 + R_2 + \dots$ (+ résistances superficielles $R_{si}$, $R_{se}$).

## Coefficient de transmission surfacique
$$U = \frac{1}{R_{tot}}\quad (\text{W·m}^{-2}\text{·K}^{-1})$$
On cherche un $U$ **le plus faible possible** (paroi très isolante).

## Déperdition à travers une paroi
$$\Phi = U \times A \times \Delta T\quad (\text{W})$$
$A$ = surface (m²), $\Delta T$ = écart de température intérieur/extérieur (K ou °C).

## Méthode type
1. Calculer chaque $R = e/\lambda$, sommer → $R_{tot}$.
2. $U = 1/R_{tot}$.
3. $\Phi = U\,A\,\Delta T$, puis énergie sur une durée : $E = \Phi \times t$.

> **Piège** — Un écart de température en **kelvin** et en **°C** a la **même valeur** ($\Delta T$ identique) : ne pas convertir un écart.
