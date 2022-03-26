DROP DATABASE IF EXISTS cowlist;
CREATE DATABASE cowlist;
USE cowlist;

CREATE TABLE cows (
  name VARCHAR(20),
  description VARCHAR(300)
);

INSERT INTO cows (name, description) VALUES("Buttercup", "a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.");

INSERT INTO cows (name, description) VALUES("Daisy", "a small grassland plant that has flowers with a yellow disk and white rays. It has given rise to many ornamental garden varieties.");

INSERT INTO cows (name, description) VALUES("Milkshake", "a cold drink made of milk, a sweet flavoring such as fruit or chocolate, and typically ice cream, whisked until it is frothy.");

INSERT INTO cows (name, description) VALUES("Bessie", "a person's best or closest friend.");

INSERT INTO cows (name, description) VALUES("MooDonna", "archaic : lady -- used as a form of respectful address.");

INSERT INTO cows (name, description) VALUES("MooLawn", "a legendary Chinese warrior from the Northern and Southern dynasties period (420–589) of Chinese history.");