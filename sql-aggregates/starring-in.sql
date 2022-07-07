select "name" as "genre",
       count(*) as "Number of Films"
  from "genres"
  join "filmGenre" using ("genreId")
  join "castMembers" using ("filmId")
 where "actorId" = 178
 group by "genres"."name"
