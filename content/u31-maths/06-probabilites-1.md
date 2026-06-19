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

## Exemple résolu
**Un atelier produit des pièces dont 5 % sont défectueuses. On en prélève 10 (production en grande série, prélèvements indépendants). Quelle est la probabilité d'avoir exactement 1 pièce défectueuse ?**

1. **Modèle** : succès = « défectueuse », $p = 0{,}05$, $n = 10$ épreuves indépendantes → $X \sim \mathcal{B}(10\,;\,0{,}05)$.
2. **Formule** : $P(X=1) = \dbinom{10}{1} (0{,}05)^{1}(0{,}95)^{9}$.
3. **Calcul** : $\binom{10}{1}=10$, $(0{,}95)^9 \approx 0{,}6302$, donc $P(X=1) \approx 10 \times 0{,}05 \times 0{,}6302 \approx \mathbf{0{,}315}$.
4. **Espérance** : $E(X) = np = 10 \times 0{,}05 = 0{,}5$ pièce défectueuse en moyenne — cohérent.

## À toi de jouer

**Exercice 1.** $X \sim \mathcal{B}(20\,;\,0{,}3)$. Calculer $E(X)$ et $V(X)$.

<details class="corrige">
<summary>Corrigé</summary>

$E(X) = np = 20\times 0{,}3 = \mathbf{6}$ ; $V(X) = np(1-p) = 20\times 0{,}3\times 0{,}7 = \mathbf{4{,}2}$.

</details>

**Exercice 2.** On lance 3 fois une pièce équilibrée. Probabilité d'obtenir exactement 2 « pile » ?

<details class="corrige">
<summary>Corrigé</summary>

$X\sim\mathcal{B}(3\,;\,0{,}5)$. $P(X=2)=\dbinom{3}{2}(0{,}5)^2(0{,}5)^1 = 3\times 0{,}25\times 0{,}5 = \mathbf{0{,}375}$.

</details>

**Exercice 3.** Dans une usine, 2 % des produits sont non conformes. Les contrôles sont indépendants. Probabilité qu'aucun ne le soit sur un lot de 50 ?

<details class="corrige">
<summary>Corrigé</summary>

$X\sim\mathcal{B}(50\,;\,0{,}02)$. $P(X=0) = (0{,}98)^{50} \approx \mathbf{0{,}364}$, soit environ 36 %.

</details>
