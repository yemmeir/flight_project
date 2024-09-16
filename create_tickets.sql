create table tickets (
id serial primary key,
	flight_id int,
	foreign key (flight_id) references flights(id),
	customer_id int,
	foreign key (customer_id) references users(id)
)