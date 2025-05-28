import { z } from 'zod';

export const FilmSchema = z.object({
    title: z.string().min(10, "El titulo es obligatorio con la longitud minima de 10"),
    description: z.string().min(10, "La descripicion es obligatorio"),
});