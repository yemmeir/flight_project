create table customers (
id serial primary key,
	first_name varchar(255),
	last_name varchar(255),
	address varchar (255),
	phone_no varchar(255) unique,
	credit_card_no varchar(255) unique,
	user_id int unique,
	foreign key (user_id) references users(id)
	
)