# Probabilités 1

> **Objectif** — Probabilités conditionnelles, indépendance, variable aléatoire discrète et **loi binomiale**.

## Bases
- $0 \le P(A) \le 1$ ; $P(\bar A) = 1 - P(A)$.
- $P(A\cup B) = P(A) + P(B) - P(A\cap B)$.

## Probabilité conditionnelle
$$P_B(A) = \frac{P(A\cap B)}{P(B)} \qquad P(A\cap B) = P(B)\times P_B(A)$$
**Indépendance** : $A$ et $B$ indépendants $\iff P(A\cap B) = P(A)\,P(B)$.

> Outils utiles : **arbre pondéré** (les branches partant d'un nœud somment à 1) et **formule des probabilités totales**.

## Variable aléatoire discrète $X$
- Loi : tableau des valeurs $x_i$ et des probabilités $p_i$ (avec $\sum p_i = 1$).
- Espérance : $E(X) = \sum x_i\,p_i$ (gain moyen attendu).
- Variance : $V(X) = \sum p_i\,x_i^2 - E(X)^2$ ; écart-type $\sigma = \sqrt{V(X)}$.

## Loi binomiale $\mathcal{B}(n,p)$
Répétition de $n$ épreuves **identiques et indépendantes** à 2 issues (succès proba $p$). $X$ = nombre de succès.
$$P(X=k) = \binom{n}{k} p^{k}(1-p)^{\,n-k}$$
$$E(X) = np \qquad V(X) = np(1-p)$$

> **Piège** — La binomiale exige indépendance et $p$ **constant**. Un tirage *sans remise* ne suit pas une binomiale.
