![alt text](image-1.png)

Création entity Ratings

champs :

- idFormation : relation -> Formation -> ManyToOne -> no (non null) -> yes (add a new property) -> rating -> no (delete orphaned)

- rating : integer -> no (non null)

MIGRATE ET MIGRATION

<br>

Modification entity Formation

- Nouveau champ : average -> float -> no (non null)

<br>

Vue twig Formations :

```html
<td class="text-center">
  {% if formation.average == 0 %}
  <span class="badge bg-secondary">aucune note</span>
  {% else %}
  <span class="badge bg-info">{{ formation.average }}</span>
  {% endif %}
</td>
```

<br>

TRIGGER :

```sql
DELIMITER //

CREATE TRIGGER update_average_rating
AFTER INSERT ON ratings
FOR EACH ROW
BEGIN
    DECLARE new_average DECIMAL(10,2);

    -- Calculate the new average rating for the formation
    SELECT AVG(rating) INTO new_average
    FROM ratings
    WHERE id_formation_id = NEW.id_formation_id;

    -- Update the average rating in the formation table
    UPDATE formation
    SET average = new_average
    WHERE id = NEW.id_formation_id;
END;
//

DELIMITER ;
```

## Bouton pour ajouter des notes :

Vue Twig Formation

```html
<form
  class="form-inline mt-1"
  method="POST"
  action="{{ path('formations.rating.add') }}"
>
  <div class="form-group mr-1 mb-2">
    <input type="number" class="sm" name="rating" min="0" max="5" />
    <input type="hidden" name="formationId" value="{{ formation.id }}" />
    <button type="submit" class="btn btn-primary mb-2 btn-sm">Ajouter</button>
  </div>
</form>
```

<br>

Controller Formations :

```php
/**
     * @Route("/formations/rating/add", name="formations.rating.add")
     * @param Request $request
     * @return Response
     */
    public function ajout(Request $request, ManagerRegistry $doctrine): Response{
        $ratingValue = $request->get("rating");
        $formationId = $request->get("formationId");

        $formation = $doctrine->getRepository(Formation::class)->find($formationId);

        $rating = new Ratings();
        $rating->setRating($ratingValue);
        $rating->setIdFormation($formation);
        $this->ratingsRepository->add($rating, true);
        return $this->redirectToRoute('formations');
    }
```
