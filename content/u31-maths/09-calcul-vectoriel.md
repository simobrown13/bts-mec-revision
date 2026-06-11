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
