# Algorithmique, programmation & bases de données

> **Module officiel (1ʳᵉ année)** — Souvent oublié alors qu'il est au programme. On attend : **lire et comprendre un algorithme simple**, le modifier, et manipuler une **base de données (SQL)**.

## Algorithmique — les briques de base
- **Variable / affectation** : `x ← 5` (on range une valeur dans `x`). Types : nombre, chaîne de caractères, tableau/liste.
- **Instruction conditionnelle** :
  ```
  Si x > 0 Alors
     afficher "positif"
  Sinon
     afficher "négatif ou nul"
  ```
- **Boucle bornée** (nombre de tours connu) :
  ```
  Pour i de 1 à 5 Faire
     S ← S + i
  ```
- **Boucle non bornée** (on répète tant qu'une condition est vraie) :
  ```
  Tant que reste > seuil Faire
     ...
  ```
- **Fonction** : reçoit des **arguments**, renvoie une **valeur**.

## Savoir « dérouler » un algorithme
Suivre l'état des variables ligne par ligne (table de suivi). Exemple :
```
S ← 0
Pour i de 1 à 3 Faire
   S ← S + i
afficher S
```
| i | S |
|---|---|
| 1 | 1 |
| 2 | 3 |
| 3 | 6 |

→ affiche **6** (c'est $1+2+3$).

## Bases de données — SQL
Une base = des **tables** reliées par des **clés** (primaire / étrangère). On interroge avec **SQL** :

```sql
SELECT nom, prix
FROM materiaux
WHERE prix < 50
ORDER BY prix;
```
- `SELECT … FROM` : quelles colonnes, dans quelle table.
- `WHERE` : filtre les lignes (opérateurs `=`, `<`, `>`, `AND`, `OR`).
- `ORDER BY` : trie le résultat.
- **Jointure** : croiser deux tables sur une colonne commune.

> **À l'examen** — On travaille sur une base **existante** ; pas besoin de créer la base. Savoir **lire** une requête et prévoir son résultat suffit le plus souvent.

## Réflexes
- Lire l'énoncé : que doit produire l'algorithme / la requête ?
- Dérouler avec un petit exemple pour vérifier.
- Soigner la **syntaxe** (point-virgule, mots-clés SQL en clair).
