---
prev:
  text: "Définition"
  link: "SQL/definition.md"
next:
  text: "Requêtes Basique | INSERT"
  link: "SQL/Requetes-Basiques/insert.md"
---

<u>**La requête SELECT permet de retourner des enregistrements.**</u>

<br>

**Table "jeux"** :

| Rank | Name                     | Platform | Year | Genre        | Publisher | Global_Sales |
| ---- | ------------------------ | -------- | ---- | ------------ | --------- | ------------ |
| 1    | Wii Sports               | Wii      | 2006 | Sports       | Nintendo  | 82.74        |
| 2    | Super Mario Bros.        | NES      | 1985 | Platform     | Nintendo  | 40.24        |
| 3    | Mario Kart Wii           | Wii      | 2008 | Racing       | Nintendo  | 35.82        |
| 4    | Wii Sports Resort        | Wii      | 2009 | Sports       | Nintendo  | 33           |
| 5    | Pokemon Red/Pokemon Blue | GB       | 1996 | Role-Playing | Nintendo  | 31.37        |

<u>_<center>Top 5 des jeux vidéo les plus vendus dans le monde</center>_</u>

## Obtenir une colonne

<br>

```sql
SELECT Name FROM jeux
```

::: info
**Résultat :**
| Name |
| ------------------------ |
| Wii Sports |
| Super Mario Bros. |
| Mario Kart Wii |
| Wii Sports Resort |
| Pokemon Red/Pokemon Blue |
:::

## Obtenir plusieurs colonnes

<br>

```sql
SELECT Name, Global_Sales FROM jeux
```

::: info
**Résultat :**
| Name | Global_Sales |
|------|--------------|
| Wii Sports | 82.74 |
| Super Mario Bros. | 40.24 |
| Mario Kart Wii | 35.82 |
| Wii Sports Resort | 33 |
| Pokemon Red/Pokemon Blue | 31.37 |
:::

## Obtenir toutes les colonnes d'un tableau

<br>

```sql
SELECT * FROM jeux
```

::: info
**Résultat :**
| Rank | Name | Platform | Year | Genre | Publisher | Global_Sales |
| ---- | ------------------------ | -------- | ---- | ------------ | --------- | ------------ |
| 1 | Wii Sports | Wii | 2006 | Sports | Nintendo | 82.74 |
| 2 | Super Mario Bros. | NES | 1985 | Platform | Nintendo | 40.24 |
| 3 | Mario Kart Wii | Wii | 2008 | Racing | Nintendo | 35.82 |
| 4 | Wii Sports Resort | Wii | 2009 | Sports | Nintendo | 33 |
| 5 | Pokemon Red/Pokemon Blue | GB | 1996 | Role-Playing | Nintendo | 31.37 |
:::
