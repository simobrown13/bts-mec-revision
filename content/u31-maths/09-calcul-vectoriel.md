# Calcul vectoriel

> **Objectif** — Manipuler des vecteurs dans le plan/l'espace, calculer un **produit scalaire** et l'utiliser pour des angles, des orthogonalités et des distances (utile en géométrie de chantier et topographie).

## Vecteurs (repère orthonormé)
- Coordonnées de $\vec{AB}$ : $(x_B - x_A\,;\,y_B - y_A)$.
- Norme : $\|\vec{u}\| = \sqrt{x^2 + y^2}$ (dans l'espace : $\sqrt{x^2+y^2+z^2}$).

## Produit scalaire
$$\vec{u}\cdot\vec{v} = x x' + y y' \quad(+\,z z' \text{ en 3D})$$
Forme géométrique :
$$\vec{u}\cdot\vec{v} = \|\vec{u}\|\,\|\vec{v}\|\,\cos\theta$$

## Applications
- **Orthogonalité** : $\vec{u}\perp\vec{v} \iff \vec{u}\cdot\vec{v} = 0$.
- **Angle** : $\cos\theta = \dfrac{\vec{u}\cdot\vec{v}}{\|\vec{u}\|\,\|\vec{v}\|}$.
- **Norme au carré** : $\|\vec u\|^2 = \vec u\cdot\vec u$.

## Méthode type
1. Calculer les coordonnées des vecteurs.
2. Appliquer la formule analytique ($xx'+yy'$).
3. Conclure : angle, perpendicularité, distance.

> **Piège** — Le produit scalaire donne un **nombre** (scalaire), pas un vecteur. Bien distinguer $\vec u\cdot\vec v$ (nombre) de $\vec u + \vec v$ (vecteur).

## Exemple résolu
**Soit $A(1\,;2)$, $B(4\,;3)$ et $C(2\,;6)$. Les droites $(AB)$ et $(AC)$ sont-elles perpendiculaires ? Quel est l'angle en $A$ ?**

1. **Vecteurs** : $\vec{AB}=(4-1\,;\,3-2)=(3\,;1)$ et $\vec{AC}=(2-1\,;\,6-2)=(1\,;4)$.
2. **Produit scalaire** : $\vec{AB}\cdot\vec{AC} = 3\times1 + 1\times4 = 3+4 = 7 \neq 0$ → **non perpendiculaires**.
3. **Normes** : $\|\vec{AB}\|=\sqrt{9+1}=\sqrt{10}$, $\|\vec{AC}\|=\sqrt{1+16}=\sqrt{17}$.
4. **Angle** : $\cos\theta = \dfrac{7}{\sqrt{10}\,\sqrt{17}} = \dfrac{7}{\sqrt{170}} \approx 0{,}537 \Rightarrow \theta \approx \mathbf{57{,}5°}$.

## À toi de jouer

**Exercice 1.** $\vec{u}=(2\,;-3)$ et $\vec{v}=(6\,;4)$. Sont-ils orthogonaux ?

<details class="corrige">
<summary>Corrigé</summary>

$\vec{u}\cdot\vec{v} = 2\times6 + (-3)\times4 = 12 - 12 = 0$ → **oui, orthogonaux**.

</details>

**Exercice 2.** Calculer la longueur du segment $[AB]$ avec $A(-1\,;2)$ et $B(3\,;5)$.

<details class="corrige">
<summary>Corrigé</summary>

$\vec{AB}=(4\,;3)$, $\|\vec{AB}\|=\sqrt{4^2+3^2}=\sqrt{16+9}=\sqrt{25}=\mathbf{5}$.

</details>

**Exercice 3.** $\vec{u}=(1\,;2\,;2)$ et $\vec{v}=(2\,;0\,;-1)$ (espace 3D). Calculer $\vec{u}\cdot\vec{v}$.

<details class="corrige">
<summary>Corrigé</summary>

$\vec{u}\cdot\vec{v} = 1\times2 + 2\times0 + 2\times(-1) = 2 + 0 - 2 = \mathbf{0}$ → orthogonaux dans l'espace.

</details>
