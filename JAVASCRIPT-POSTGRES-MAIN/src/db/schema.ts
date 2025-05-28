import { pgTable, serial,  varchar, integer } from 'drizzle-orm/pg-core';

export const actors = pgTable('actor', {
    actor_id: serial('actor_id').primaryKey(),
    first_name: varchar('first_name', { length: 100 }),
    last_name: varchar('last_name', { length: 100 })
});

export const films = pgTable('film', {
    film_id: serial('film_id').primaryKey(),
    title: varchar('title', { length: 255 }),
    description: varchar('description', { length: 500 }),
    release_year: integer('release_year'),
    language_id:integer('language_id'),
    rental_duration: integer ('rental_duration'),
    length: integer('length'),
});

