CREATE TABLE users (

  ID SERIAL PRIMARY KEY,
  "createdAt" DATE,
  "updatedAt" DATE,

  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(30) NOT NULL,
  password VARCHAR(30) NOT NULL,
  job_id integer
);

CREATE TABLE jobs (

  ID SERIAL PRIMARY KEY,
  "createdAt" DATE,
  "updatedAt" DATE,

  name VARCHAR(30) NOT NULL,
  description VARCHAR(30) NOT NULL,
  start_bid VARCHAR(30) NOT NULL
);

