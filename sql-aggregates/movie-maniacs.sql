select "firstName",
       "lastName",
       sum("amount") as "Total Spent"
  from  "customers"
  join  "payments" using ("customerId")
  join  "rentals" using ("rentalId")
  group by "firstName", "lastName"
  order by "Total Spent" desc
