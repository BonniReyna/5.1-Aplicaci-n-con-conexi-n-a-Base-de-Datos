import { filmRepository } from '../repositories/film.repos.ts';
export const filmService = {
    getAll: () => filmRepository.findAll(),
    getById: (id: number) => filmRepository.findById(id),
    add: (title: string, description: string, rental_duration:number) =>
        filmRepository.add({ title, description, rental_duration }),
};
