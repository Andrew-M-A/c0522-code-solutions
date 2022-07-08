select count(*) as "Number of Cities in Country"
from "cities"
join "countries" using ("countryId")
where "countryId" = 103
