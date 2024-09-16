create table customers (
id serial primary key,
	first_name varchar(255) not null,
	last_name varchar(255) not null,
	address varchar (255) not null,
	phone_no varchar(255) unique not null,
	credit_card_no varchar(255) unique not null,
	user_id int unique,
	foreign key (user_id) references users(id)
	
)