-- psql -U mb -d allfeet -f ./votes.sql
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id bigInt NOT NULL,
    PRIMARY KEY (id),
    email varchar(50) UNIQUE NOT NULL,
    firstName varchar(50),
    lastName varchar(50)
);

DROP TABLE IF EXISTS votes;

CREATE TABLE votes (
    id bigInt NOT NULL,
    PRIMARY KEY (id),
    shoeId bigInt,
    CONSTRAINT shoeId FOREIGN KEY (shoeId) REFERENCES shoe_model(id),
    userId bigInt NOT NULL,
    CONSTRAINT userId FOREIGN KEY (userId) REFERENCES users(id)
)