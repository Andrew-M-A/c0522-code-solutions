select "line1",
       "district",
       "b"."name" as "city",
       "c"."name" as "country"
  from "addresses"
  inner join "cities" as "b" using ("cityId")
  inner join "countries" as "c" using ("countryId")
limit 10;
