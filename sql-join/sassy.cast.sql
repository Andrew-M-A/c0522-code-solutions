select "firstName",
       "lastName"
  from "actors"
inner join "castMembers" using ("actorId")
inner join "films" using ("filmId")
where "title" = 'Jersey Sassy'
