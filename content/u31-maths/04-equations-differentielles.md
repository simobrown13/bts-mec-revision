# Équations différentielles du 1er ordre

> **Objectif** — Résoudre $y' = a y + b$ et déterminer la constante avec une condition initiale (charge/décharge, refroidissement, évolution de population).

## Équation $y' = a y$
Solutions : $$y(x) = K\,e^{ax}\qquad (K \in \mathbb{R})$$

## Équation $y' = a y + b$  (avec $a\neq0$)
Solution générale = solution de l'équation homogène + **solution particulière constante** :
$$y(x) = K\,e^{ax} - \frac{b}{a}$$
La constante $-\dfrac{b}{a}$ est la **valeur d'équilibre** (limite quand $a<0$).

## Condition initiale
On utilise $y(0)=y_0$ (ou une autre valeur connue) pour calculer $K$.

## Méthode type
1. Mettre l'équation sous la forme $y' = a y + b$.
2. Écrire $y = K e^{ax} - \frac{b}{a}$.
3. Injecter la condition initiale pour trouver $K$.
4. Conclure / interpréter (régime permanent si $a<0$).

> **Exemple** — Refroidissement : $\theta' = -k(\theta - \theta_{\text{air}})$. La solution tend vers la température de l'air.

## Exemple résolu
**Résoudre $y' = -2y + 6$ avec $y(0) = 5$, puis donner la limite en $+\infty$.**

1. **Forme** : $a = -2$, $b = 6$. Valeur d'équilibre : $-\dfrac{b}{a} = -\dfrac{6}{-2} = 3$.
2. **Solution générale** : $y(x) = K\,e^{-2x} + 3$.
3. **Condition initiale** : $y(0) = K\,e^{0} + 3 = K + 3 = 5 \Rightarrow K = 2$.
4. **Solution** : $y(x) = 2\,e^{-2x} + 3$.
5. **Limite** : $a<0$ donc $e^{-2x}\to 0$ : $y(x)\to \mathbf{3}$ (régime permanent = valeur d'équilibre).

## À toi de jouer

**Exercice 1.** Donner la solution générale de $y' = 3y$.

<details class="corrige">
<summary>Corrigé</summary>

Forme $y'=ay$ avec $a=3$ : $y(x) = K\,e^{3x}$, $K\in\mathbb{R}$.

</details>

**Exercice 2.** Résoudre $y' = -y + 4$ avec $y(0) = 1$.

<details class="corrige">
<summary>Corrigé</summary>

$a=-1$, $b=4$, équilibre $-\tfrac{b}{a}=4$. Donc $y=K e^{-x}+4$.
$y(0)=K+4=1 \Rightarrow K=-3$. Solution : $y(x) = -3\,e^{-x} + 4$.

</details>

**Exercice 3.** Un café à $80\,°\text{C}$ refroidit selon $\theta' = -0{,}05(\theta - 20)$ (temps en min). Vers quelle température tend-il, et pourquoi ?

<details class="corrige">
<summary>Corrigé</summary>

L'équation s'écrit $\theta' = -0{,}05\,\theta + 1$ : $a=-0{,}05<0$, équilibre $-\tfrac{b}{a}=20$.
Le café tend vers **$20\,°\text{C}$**, la température ambiante — cohérent physiquement.

</details>
