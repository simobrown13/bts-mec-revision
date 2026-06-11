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
