create table users (
id SERIAL PRIMARY KEY,
username VARCHAR(255) UNIQUE not null,
password VARCHAR (255) not null,
email VARCHAR (255) UNIQUE not null
)