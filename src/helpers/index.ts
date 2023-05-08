import { MovieType } from "@/types";

export function getTitleOfMovieType(type: MovieType | string): string {
    if (type === 'cartoon') {
        return 'Мультфильм';
    }

    return 'Фильм';
}