export interface Country {
    name: string;
}

export interface Poster {
    url: string;
    previewUrl: string;
}

export interface Gender {
    name: string;
}

export interface similarMovie {
    id: number;
    name: string;
    poster: Poster;
}

export type MovieType = 'movie' | 'cartoon';

export interface Movie {
    id: number;
    type: MovieType | string;
    name: string;
    description: string;
    shortDescription: string | null;
    poster: Poster;
    movieLength: number | null;
    year: number;
    ageRating: number | null;
    countries: Country[];
    similarMovies: similarMovie[];
    genres: Gender[];
}

export interface ShortMovie {
    id: number;
    type: MovieType | string;
    name: string;
    url: string;
    shortDescription?: string | null;
}

export interface Error {
    status: number;
}

export type Status = 'default' | 'loading' | 'success' | 'error';

export interface GetMoviesResponse {
    movies: ShortMovie[];
    total: number;
}

export interface GetMovieResponse extends Movie {}

