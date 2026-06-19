# Fonctions d'une variable réelle

> **Objectif** — Dériver, étudier les variations, lire un signe, exploiter $e^x$ et $\ln x$, et tracer/interpréter une tangente.

## Dérivées usuelles
| $f(x)$ | $f'(x)$ |
|---|---|
| $k$ | $0$ |
| $x^n$ | $n\,x^{n-1}$ |
| $\dfrac{1}{x}$ | $-\dfrac{1}{x^2}$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt{x}}$ |
| $e^{x}$ | $e^{x}$ |
| $\ln x$ | $\dfrac{1}{x}$ |

## Opérations
$$(u+v)' = u'+v' \qquad (uv)' = u'v + uv' \qquad \left(\frac{u}{v}\right)' = \frac{u'v - uv'}{v^2}$$
Composée fréquente : $\big(e^{u}\big)' = u'\,e^{u}$ et $\big(\ln u\big)' = \dfrac{u'}{u}$.

## Variations
Le **signe de $f'$** donne le sens de variation :
- $f'(x) > 0$ sur un intervalle → $f$ **croissante** ;
- $f'(x) < 0$ → $f$ **décroissante** ;
- $f'(x) = 0$ avec changement de signe → **extremum**.

## Tangente au point d'abscisse $a$
$$y = f'(a)\,(x-a) + f(a)$$

## Propriétés exp / ln
$$e^{a}e^{b}=e^{a+b}\quad \ln(ab)=\ln a+\ln b\quad \ln(e^{x})=x\quad e^{\ln x}=x$$

> **Piège** — $\ln$ n'est défini que pour $x>0$ ; toujours préciser l'ensemble de définition avant de dériver.

## Exemple résolu
**Étudier les variations de $f(x) = x^3 - 3x + 2$ sur $\mathbb{R}$ et donner la tangente en $x=0$.**

*Comment le présenter au jury, étape par étape :*

1. **Domaine** : $f$ est un polynôme, donc définie et dérivable sur $\mathbb{R}$.
2. **Dérivée** : $f'(x) = 3x^2 - 3 = 3(x^2-1) = 3(x-1)(x+1)$.
3. **Signe de $f'$** : le trinôme s'annule en $x=-1$ et $x=1$.
   - $f'(x) > 0$ sur $]-\infty;-1[$ et $]1;+\infty[$ → $f$ **croissante** ;
   - $f'(x) < 0$ sur $]-1;1[$ → $f$ **décroissante**.
4. **Extrema** : **maximum local** en $x=-1$ ($f(-1)=4$), **minimum local** en $x=1$ ($f(1)=0$).
5. **Tangente en $0$** : $f(0)=2$ et $f'(0)=-3$, donc $y = -3(x-0)+2 = -3x+2$.

> À l'oral, conclure : « $f$ croît puis décroît puis croît ; la courbe a une pente de $-3$ qui traverse l'axe des ordonnées en $2$, ce qui est cohérent avec la décroissance en $0$. »

## À toi de jouer

**Exercice 1.** Dériver $g(x) = 2x^3 - 5x^2 + 4$ puis déterminer le signe de $g'$.

<details class="corrige">
<summary>Corrigé</summary>

$g'(x) = 6x^2 - 10x = 2x(3x-5)$. Racines : $x=0$ et $x=\tfrac{5}{3}$.
$g'>0$ sur $]-\infty;0[$ et $]\tfrac{5}{3};+\infty[$ (croissance), $g'<0$ sur $]0;\tfrac{5}{3}[$ (décroissance).

</details>

**Exercice 2.** Soit $h(x) = x\,e^{x}$. Calculer $h'(x)$ et déterminer où $h$ est décroissante.

<details class="corrige">
<summary>Corrigé</summary>

Produit $u=x$, $v=e^x$ : $h'(x) = u'v+uv' = 1\cdot e^x + x\cdot e^x = (1+x)e^x$.
Comme $e^x>0$, le signe de $h'$ est celui de $(1+x)$ : $h$ **décroissante sur $]-\infty;-1[$**, croissante au-delà. Minimum en $x=-1$.

</details>

**Exercice 3.** Donner l'équation de la tangente à la courbe de $f(x)=\ln x$ au point d'abscisse $a=1$.

<details class="corrige">
<summary>Corrigé</summary>

$f(1)=\ln 1 = 0$ et $f'(x)=\tfrac{1}{x}$ donc $f'(1)=1$.
Tangente : $y = f'(1)(x-1)+f(1) = 1\cdot(x-1)+0 = x-1$.

</details>
