# Statistique inférentielle

> **Objectif** — Estimer un paramètre d'une population à partir d'un échantillon : estimation ponctuelle et **intervalle de confiance** d'une proportion.

## Estimation ponctuelle
- Moyenne de la population estimée par la **moyenne de l'échantillon** $\bar{x}$.
- Proportion estimée par la **fréquence observée** $f = \dfrac{k}{n}$.

## Intervalle de confiance d'une proportion (niveau 95 %)
Pour un échantillon de taille $n$ et une fréquence $f$ :
$$I = \left[\,f - \frac{1}{\sqrt{n}}\ ;\ f + \frac{1}{\sqrt{n}}\,\right]$$
(version simplifiée fréquente au lycée/BTS). Plus $n$ est grand, plus l'intervalle est **étroit** (estimation précise).

## Lecture / interprétation
« Au niveau de confiance 95 %, la proportion réelle dans la population est dans $I$. » Le niveau de confiance porte sur la **méthode**, pas sur une certitude pour un échantillon donné.

## Méthode type
1. Calculer $f = k/n$.
2. Calculer $\dfrac{1}{\sqrt n}$ (ou la marge demandée).
3. Donner $I$ et conclure (l'intervalle contient-il une valeur de référence ?).

> **Piège** — Distinguer **fluctuation** (population connue → échantillon) et **estimation** (échantillon connu → population). Vérifier le sens de la question.
