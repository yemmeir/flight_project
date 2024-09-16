create table flights (
id serial primary key,
	airline_id int,
	foreign key(airline_id) references airlines(id),
	origin_country_id int,
	foreign key(origin_country_id) references countries(id),
	destination_country_id int,
	foreign key(destination_country_id) references countries(id),
	departure_time date,
	remaining_tickets int
	
)