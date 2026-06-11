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
