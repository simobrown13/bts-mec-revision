# Suites numériques

> **Objectif** — Reconnaître une suite arithmétique ou géométrique, calculer un terme, une somme, et l'appliquer aux situations financières (intérêts composés, amortissements).

## Suite arithmétique
Raison **constante ajoutée** : $u_{n+1} = u_n + r$.

- Terme général : $u_n = u_0 + n\,r$ (ou $u_n = u_p + (n-p)\,r$).
- Sens de variation : croissante si $r>0$, décroissante si $r<0$.
- Somme : $\displaystyle S = \frac{(\text{nb de termes})\times(\text{1er} + \text{dernier})}{2}$.

## Suite géométrique
Raison **constante multipliée** : $u_{n+1} = q\,u_n$.

- Terme général : $u_n = u_0\,q^{\,n}$.
- Variation (si $u_0>0$) : croissante si $q>1$, décroissante si $0<q<1$.
- Somme : $\displaystyle S = u_0\,\frac{1-q^{\,n+1}}{1-q}$ (pour $q\neq1$).

## Application : intérêts composés
Un capital $C_0$ placé au taux $t$ par période suit une suite **géométrique** de raison $1+t$ :
$$C_n = C_0\,(1+t)^{\,n}$$

> **Piège fréquent** — Intérêts *simples* → suite **arithmétique** ($C_n=C_0(1+nt)$). Intérêts *composés* → suite **géométrique**. Ne pas confondre.

## Méthode type
1. Identifier la nature : différence constante (arithm.) ou quotient constant (géom.) entre termes consécutifs.
2. Écrire $u_n$.
3. Répondre à la question (terme, somme, seuil avec la calculatrice).

## Exemple résolu
**Une machine perd 12 % de sa valeur chaque année. Achetée $30\,000\ €$, que vaut-elle au bout de 4 ans ?**

1. **Nature** : on multiplie chaque année par le même coefficient → suite **géométrique** de raison $q = 1-0{,}12 = 0{,}88$.
2. **Modèle** : $V_n = 30\,000 \times 0{,}88^{\,n}$ (avec $V_0 = 30\,000$).
3. **Calcul** : $V_4 = 30\,000 \times 0{,}88^{4} \approx 30\,000 \times 0{,}5997 \approx \mathbf{17\,991\ €}$.

> Cohérence : moins de la moitié au bout de 4 ans, c'est plausible pour une dépréciation de 12 %/an.

## À toi de jouer

**Exercice 1.** Une suite arithmétique vérifie $u_0 = 7$ et $r = 4$. Calculer $u_{12}$.

<details class="corrige">
<summary>Corrigé</summary>

$u_n = u_0 + n r = 7 + 12\times 4 = 7 + 48 = \mathbf{55}$.

</details>

**Exercice 2.** Calculer la somme $S = 2 + 5 + 8 + \dots + 32$ (suite arithmétique de raison 3).

<details class="corrige">
<summary>Corrigé</summary>

Nombre de termes : de 2 à 32 par pas de 3 → $\tfrac{32-2}{3}+1 = 11$ termes.
$S = \dfrac{11\times(2+32)}{2} = \dfrac{11\times 34}{2} = \mathbf{187}$.

</details>

**Exercice 3.** On place $5\,000\ €$ à intérêts composés de 3 % par an. Capital au bout de 6 ans ?

<details class="corrige">
<summary>Corrigé</summary>

$C_n = C_0(1+t)^n = 5\,000 \times 1{,}03^{6} \approx 5\,000 \times 1{,}1941 \approx \mathbf{5\,970\ €}$.

</details>
