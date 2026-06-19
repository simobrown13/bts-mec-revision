# Calcul intégral

> **Objectif** — Trouver une primitive, calculer une intégrale définie, l'interpréter en aire et en valeur moyenne.

## Primitives usuelles
| $f(x)$ | une primitive $F(x)$ |
|---|---|
| $x^n\ (n\neq -1)$ | $\dfrac{x^{n+1}}{n+1}$ |
| $\dfrac{1}{x}$ | $\ln x$ |
| $e^{x}$ | $e^{x}$ |
| $e^{ax}$ | $\dfrac{1}{a}e^{ax}$ |

Toute primitive est définie **à une constante près** : $F(x)+C$.

## Intégrale définie
$$\int_a^b f(x)\,dx = \big[F(x)\big]_a^b = F(b) - F(a)$$

## Interprétations
- **Aire** sous la courbe (si $f\ge0$ sur $[a;b]$) = $\displaystyle\int_a^b f(x)\,dx$.
- **Valeur moyenne** de $f$ sur $[a;b]$ :
$$\mu = \frac{1}{b-a}\int_a^b f(x)\,dx$$

## Méthode type
1. Déterminer une primitive $F$.
2. Calculer $F(b)-F(a)$.
3. Conclure (aire, valeur moyenne, grandeur cumulée).

> **Piège** — Une aire est toujours **positive** : si $f<0$, l'intégrale est négative, l'aire vaut sa valeur absolue.

## Exemple résolu
**Calculer $\displaystyle\int_{1}^{3} (2x + 1)\,dx$ et en déduire la valeur moyenne de $f(x)=2x+1$ sur $[1;3]$.**

1. **Primitive** : $F(x) = x^2 + x$ (on vérifie : $F'(x)=2x+1$ ✓).
2. **Intégrale** : $\big[x^2+x\big]_1^3 = (9+3)-(1+1) = 12 - 2 = \mathbf{10}$.
3. **Valeur moyenne** : $\mu = \dfrac{1}{3-1}\times 10 = \dfrac{10}{2} = \mathbf{5}$.

> Cohérence : $f$ varie de $f(1)=3$ à $f(3)=7$ ; la moyenne $5$ est bien au milieu (fonction affine).

## À toi de jouer

**Exercice 1.** Déterminer une primitive de $f(x) = 3x^2 - 4x + 1$.

<details class="corrige">
<summary>Corrigé</summary>

Terme à terme : $F(x) = x^3 - 2x^2 + x \ (+C)$. Vérification : $F'(x) = 3x^2 - 4x + 1$ ✓.

</details>

**Exercice 2.** Calculer $\displaystyle\int_{0}^{2} e^{x}\,dx$.

<details class="corrige">
<summary>Corrigé</summary>

Primitive de $e^x$ : $e^x$. Donc $\big[e^x\big]_0^2 = e^2 - e^0 = e^2 - 1 \approx 7{,}39 - 1 = \mathbf{6{,}39}$.

</details>

**Exercice 3.** Calculer l'aire sous la courbe de $f(x)=x^2$ entre $x=0$ et $x=3$.

<details class="corrige">
<summary>Corrigé</summary>

$f\ge0$ sur $[0;3]$, donc aire $=\displaystyle\int_0^3 x^2\,dx = \left[\dfrac{x^3}{3}\right]_0^3 = \dfrac{27}{3}-0 = \mathbf{9}$ (unités d'aire).

</details>
