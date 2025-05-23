import {HttpResponse} from "../utils/http_reponse.ts";
import {filmService} from "../services/film.service.ts";

export const FilmController = {
    getAll: async () => {
        try {
            const actors = await filmService.getAll();
            return HttpResponse.ok(actors, "Peliculas recuperados correctamente");
        } catch (error) {
            return HttpResponse.error("Error al recuperar las peliculas");
        }
    },

    getById: async (id: number) => {
        try {
            const actor = await filmService.getById(id);
            if (!actor) {
                return HttpResponse.notFound("Pelicula no encontrado");
            }
            return HttpResponse.ok([actor], "Pelicula encontrado");
        } catch (error) {
            return HttpResponse.error("Error al recuperar el actor");
        }
    },

    add: async (body: { title: string; description: string, rental_duration: number }) => {
        try {
            const newFilm = await filmService.add(body.title, body.description, body.rental_duration);
            return HttpResponse.created(newFilm, "Pelicula creada");
        } catch (error) {
            return HttpResponse.error("Error al crear la pelicula");
        }
    },
};
