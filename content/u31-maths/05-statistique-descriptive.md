# Statistique descriptive

> **Objectif** — Résumer une série (centre, dispersion), et réaliser un **ajustement affine** par les moindres carrés (très fréquent en éco-construction : coût en fonction d'une quantité).

## Paramètres d'une série
- **Moyenne** : $\bar{x} = \dfrac{1}{N}\sum n_i x_i$.
- **Médiane** : valeur qui partage l'effectif en deux moitiés.
- **Variance** : $V = \dfrac{1}{N}\sum n_i (x_i-\bar{x})^2 = \overline{x^2} - \bar{x}^2$.
- **Écart-type** : $\sigma = \sqrt{V}$ (même unité que les données → mesure la dispersion).

## Série double — ajustement affine
On cherche $y = a x + b$ qui « colle » au nuage de points.

- Coefficient directeur : $\displaystyle a = \frac{\operatorname{cov}(x,y)}{V(x)}$  avec  $\operatorname{cov}(x,y)=\overline{xy}-\bar{x}\,\bar{y}$.
- Ordonnée à l'origine : $b = \bar{y} - a\,\bar{x}$.
- La droite passe par le **point moyen** $G(\bar{x};\bar{y})$.

## Coefficient de corrélation $r$
$$r = \frac{\operatorname{cov}(x,y)}{\sigma_x\,\sigma_y}\in[-1\,;1]$$
$|r|$ proche de $1$ → l'ajustement affine est **pertinent** ; proche de $0$ → relation linéaire faible.

## En pratique (calculatrice mode statistique)
Saisir les couples, lire directement $a$, $b$ et $r$ dans le menu régression linéaire, puis **interpréter** : prévision pour une valeur de $x$, interprétation du coefficient directeur (coût marginal, etc.).

> **Piège** — Une forte corrélation n'est pas une causalité, et l'extrapolation hors du domaine observé est risquée.
