
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE status (
	id SERIAL PRIMARY KEY,
	name VARCHAR(24)
);

INSERT INTO status (name) VALUES ('Built'), ('Incomplete'), ('Designed');

CREATE TABLE pc (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50),
	status_id INT REFERENCES status (id),
	color VARCHAR(16),
	price_total INT,
	max_wattage INT,
	user_id INT REFERENCES "user" (id)
);

CREATE TABLE component_type (
	id SERIAL PRIMARY KEY,
	type VARCHAR(24)
);

CREATE TABLE component (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80),
	image VARCHAR(160),
	price INT,
	money_spent INT,
	component_type_id INT references component_type (id),
	subtype VARCHAR(40),
	specs VARCHAR(180),
	compatibility VARCHAR(120),
	speed VARCHAR(60),
	efficiency VARCHAR(24),
	wattage INT
);

CREATE TABLE pc_component (
	id SERIAL PRIMARY KEY,
	pc_id INT REFERENCES pc (id),
	component_id INT REFERENCES component (id)
);

INSERT INTO component_type (type) VALUES ('gpu'), ('cpu'), ('cpu_cooler'), ('psu'), ('motherboard'), ('memory'), ('storage'), ('case');