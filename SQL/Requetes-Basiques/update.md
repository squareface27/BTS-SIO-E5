---
prev:
  text: "Requêtes Basique | INSERT"
  link: "SQL/Requetes-Basiques/insert.md"
next:
  text: "Requêtes Basique | DELETE"
  link: "SQL/Requetes-Basiques/delete.md"
---

<u>**La requête UPDATE permet de modifier des enregistrements.**</u>

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

## Modifier une ligne

```sql
UPDATE jeux
SET Platform = 'Game Boy',
    Year = 2018
WHERE Name = 'Wii Sports'
```

::: info
**Résultat :**
| Rank | Name | Platform | Year | Genre | Publisher | Global_Sales |
| ---- | ------------------------ | -------- | ---- | ------------ | --------- | ------------ |
| 1 | Wii Sports | Game Boy | 2018 | Sports | Nintendo | 82.74 |
:::

<br>

## Modifier toutes les lignes

```sql
UPDATE jeux
SET Year = 1957
```

::: info
**Résultat :**
| Rank | Name | Platform | Year | Genre | Publisher | Global_Sales |
| ---- | ------------------------ | -------- | ---- | ------------ | --------- | ------------ |
| 1 | Wii Sports | Wii | 1957 | Sports | Nintendo | 82.74 |
| 2 | Super Mario Bros. | NES | 1957 | Platform | Nintendo | 40.24 |
| 3 | Mario Kart Wii | Wii | 1957 | Racing | Nintendo | 35.82 |
| 4 | Wii Sports Resort | Wii | 1957 | Sports | Nintendo | 33 |
| 5 | Pokemon Red/Pokemon Blue | GB | 1957 | Role-Playing | Nintendo | 31.37
:::
