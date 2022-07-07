select "firstName",
       "lastName"
  from "customers"
inner join "rentals" using ("customerId")
inner join "inventory" using ("inventoryId")
inner join "films" using ("filmId")
where "title" = 'Magic Mallrats'
