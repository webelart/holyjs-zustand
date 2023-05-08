import { Movie, ShortMovie } from '@/types';
export function formatMovies(movies: Movie[]): ShortMovie[] {
    return movies.map((movie) => ({
        id: movie.id,
        name: movie.name,
        type: movie.type,
        url: movie.poster.previewUrl,
        shortDescription: movie.shortDescription,
    }))
}