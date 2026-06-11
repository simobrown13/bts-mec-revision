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
