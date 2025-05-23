import { Hono } from 'hono';
import { FilmSchema } from '../schemas/film.schema.ts';
import { FilmController } from '../controllers/film.controller.ts';
import { validateBody } from '../middlewares/validate.ts';
import {filmRepository} from "../repositories/film.repos.ts"; // este es el nuevo middleware
const filmRouter = new Hono();
filmRouter.get('/films', async (): Promise<Response> => {
    const { status, body } = await FilmController.getAll();
    return new Response(JSON.stringify(body), {
        status: status,
        headers: { 'Content-Type': 'application/json' }
    });
});
filmRouter.get('/films/:id', async (c) => {
    const id = Number(c.req.param('id'));
    const { status, body } = await FilmController.getById(id);
    return new Response(JSON.stringify(body), {
        status: status,
        headers: { 'Content-Type': 'application/json' }
    });
});
filmRouter.post(
    '/films',
    validateBody(FilmSchema), // ✅ validación personalizada
    async (c) => {
        const bodyValidated = c.get('validatedBody'); // ya está validado
        const { status, body } = await FilmController.add(bodyValidated);
        return new Response(JSON.stringify(body), {
            status: status,
            headers: { 'Content-Type': 'application/json' }
        });
    }
);
export default filmRouter;
