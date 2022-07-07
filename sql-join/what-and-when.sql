select "releaseYear",
       "a"."name" as "genre"
  from "films"
inner join "filmGenre" using ("filmId")
inner join "genres" as "a" using ("genreId")
where "title" = 'Boogie Amelie';
