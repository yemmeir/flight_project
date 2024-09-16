create table airlines(
	id SERIAL PRIMARY KEY,
name varchar(255) not null,
	country_id int,
	foreign key (country_id) references countries(id),
	user_id int unique,
	foreign key (user_id) references users(id)

)