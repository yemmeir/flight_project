create table users (
id SERIAL PRIMARY KEY,
username VARCHAR(255) UNIQUE,
password VARCHAR (255),
email VARCHAR (255) UNIQUE
)