import { db } from '../db';
import { films } from '../db/schema.ts';
import { eq } from "drizzle-orm/sql/expressions/conditions";

export const filmRepository = {
    findAll: async () => db.select().from(films),
    findById: async (id: number) => {
        const [film] = await db
            .select()
            .from(films)
            .where(eq(films.film_id, id));
        return film;
    },
    add: async (data: { title: string; description: string, rental_duration: number }) =>
        db.insert(films).values(data).returning(),
};
