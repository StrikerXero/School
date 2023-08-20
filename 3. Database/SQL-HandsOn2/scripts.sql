SELECT * FROM film
JOIN inventory USING(film_id)
JOIN rental USING(inventory_id)
JOIN payment USING(rental_id)
WHERE amount > "4.99"
ORDER BY title

--   -- It works and doesn't throw any errors but its 5am. Planned on calulating which movie was the most profitable and
--   -- realized that I may need several more hours because the results dont look correct and it needs more math and WITH clauses.. maybe
-- SELECT film_id, title, rental_rate, rental_duration,
-- 	COUNT(inventory_id) AS "number_of_times_rented",
--     SUM(TIMESTAMPDIFF(DAY, rental_date, return_date)) AS "total_days_rented",
-- 	SUM(amount) AS "total_earned"
-- FROM film
-- JOIN inventory USING(film_id)
-- JOIN rental USING(inventory_id)
-- JOIN payment USING(rental_id)
-- WHERE amount > "4.99"
-- GROUP BY title, film_id, rental_rate, rental_duration
-- ORDER BY title




