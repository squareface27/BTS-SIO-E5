---
prev:
  text: "Requêtes Basique | SELECT"
  link: "SQL/Requetes-Basiques/select.md"
next:
  text: "Requêtes Basique | UPDATE"
  link: "SQL/Requetes-Basiques/update.md"
---

<u>**La requête INSERT permet d'ajouter des enregistrements.**</u>

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

## Insertion de plusieurs lignes

```sql
INSERT INTO jeux (Rank, Name, Plateforme, Year, Genre, Publisher, Global_Sales)
    VALUES
    ('6','Tetris','GB','1989','Puzzle','Nintendo','30.26'),
    ('7','New Super Mario Bros.','DS','2006','Platform','Nintendo','30.01');
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
| 6 | Tetris | GB | 1989 | Puzzle | Nintendo | 30.26 |
| 7 | New Super Mario Bros. | DS | 2006 | Platform | Nintendo | 30.01
:::
