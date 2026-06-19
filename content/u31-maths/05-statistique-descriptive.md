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

## Exemple résolu
**Série : $11,\ 13,\ 14,\ 18,\ 14$. Calculer la moyenne et l'écart-type.**

1. **Moyenne** : $\bar{x} = \dfrac{11+13+14+18+14}{5} = \dfrac{70}{5} = \mathbf{14}$.
2. **Écarts au carré** : $(11-14)^2=9$, $(13-14)^2=1$, $(14-14)^2=0$, $(18-14)^2=16$, $(14-14)^2=0$. Somme $=26$.
3. **Variance** : $V = \dfrac{26}{5} = 5{,}2$.
4. **Écart-type** : $\sigma = \sqrt{5{,}2} \approx \mathbf{2{,}28}$.

> À l'examen, ces valeurs se lisent directement en mode statistique de la calculatrice — l'important est de **savoir interpréter** $\sigma$ (dispersion autour de 14).

## À toi de jouer

**Exercice 1.** Un coefficient de corrélation vaut $r = 0{,}98$. L'ajustement affine est-il pertinent ?

<details class="corrige">
<summary>Corrigé</summary>

$|r|=0{,}98$ est très proche de 1 → forte corrélation linéaire positive : l'**ajustement affine est pertinent**, on peut faire des prévisions (dans le domaine observé).

</details>

**Exercice 2.** La droite d'ajustement d'un coût (en €) en fonction du nombre $x$ de pièces est $y = 12x + 150$. Que représentent $12$ et $150$ ?

<details class="corrige">
<summary>Corrigé</summary>

$12$ = **coût marginal** (chaque pièce supplémentaire coûte 12 €). $150$ = **coût fixe** (ordonnée à l'origine, indépendant de la production).

</details>

**Exercice 3.** Avec le modèle $y = 12x + 150$, estimer le coût pour $x = 40$ pièces.

<details class="corrige">
<summary>Corrigé</summary>

$y = 12\times 40 + 150 = 480 + 150 = \mathbf{630\ €}$.

</details>
