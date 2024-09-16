create table countries (
id SERIAL PRIMARY KEY,
	name varchar(255) not null
);

create table users (
id SERIAL PRIMARY KEY,
username VARCHAR(255) UNIQUE not null,
password VARCHAR (255) not null,
email VARCHAR (255) UNIQUE not null
);

create table airlines(
	id SERIAL PRIMARY KEY,
name varchar(255) not null,
	country_id int,
	foreign key (country_id) references countries(id),
	user_id int unique,
	foreign key (user_id) references users(id)

);
create table customers (
id serial primary key,
	first_name varchar(255) not null,
	last_name varchar(255) not null,
	address varchar (255) not null,
	phone_no varchar(255) unique not null,
	credit_card_no varchar(255) unique not null,
	user_id int unique,
	foreign key (user_id) references users(id)
	
);

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
	
);

create table tickets (
id serial primary key,
	flight_id int,
	foreign key (flight_id) references flights(id),
	customer_id int,
	foreign key (customer_id) references users(id)
);

