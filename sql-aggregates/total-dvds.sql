select count(*) as "totalDVDs"
  from "inventory"
join "stores" using ("storeId");
