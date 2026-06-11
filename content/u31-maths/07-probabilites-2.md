# Probabilités 2 — lois de Poisson et normale

> **Objectif** — Reconnaître et utiliser la **loi de Poisson** (événements rares) et la **loi normale** (mesures, contrôle qualité), à la calculatrice.

## Loi de Poisson $\mathcal{P}(\lambda)$
Modélise un nombre d'événements rares sur une durée/surface donnée.
$$P(X=k) = e^{-\lambda}\,\frac{\lambda^{k}}{k!} \qquad E(X)=V(X)=\lambda$$
Approxime la binomiale quand $n$ est grand et $p$ petit ($\lambda \approx np$).

## Loi normale $\mathcal{N}(\mu,\sigma)$
Loi **continue** « en cloche », symétrique autour de la moyenne $\mu$ ; $\sigma$ = étalement.

- $P(X < \mu) = P(X > \mu) = 0{,}5$.
- Règles repères : $\approx 68\%$ dans $[\mu-\sigma;\mu+\sigma]$, $\approx 95\%$ dans $[\mu-2\sigma;\mu+2\sigma]$.
- À la calculatrice : `NormalFRép(borne inf, borne sup, μ, σ)` donne $P(a<X<b)$.

## Méthode type (normale)
1. Identifier $\mu$ et $\sigma$.
2. Traduire la question en $P(X<a)$, $P(X>a)$ ou $P(a<X<b)$.
3. Calculer (calculatrice) ; un schéma de la cloche évite les erreurs de borne.

> **Piège** — Pour une loi continue, $P(X=a)=0$ : `<` et `≤` donnent le même résultat.
