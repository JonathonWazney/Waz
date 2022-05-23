CREATE TABLE person(
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(20)
);

CREATE TABLE list(
    list_id SERIAL,
    task TEXT,
    userId INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES person(id)
);

INSERT INTO  person (username) VALUES('john');
INSERT INTO list (task, userId) VALUES ('clean house', 1);