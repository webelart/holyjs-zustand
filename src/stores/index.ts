import { useStore } from 'zustand'

import { useMovie, MovieStore } from './movie';
import { useMovies, MoviesStore} from './movies';
import { useMovieType, MovieTypeStore } from './movieType';

export const equalityFn = <T>(a: T, b: T): boolean => JSON.stringify(a) === JSON.stringify(b);

export function useMovieStore<T>(selector: (state: MovieStore) => T) {
    return useStore(useMovie, selector!, equalityFn)
}

export function useMoviesStore<T>(selector: (state: MoviesStore) => T) {
    return useStore(useMovies, selector!, equalityFn)
}

export function useMovieTypeStore<T>(selector: (state: MovieTypeStore) => T) {
    return useStore(useMovieType, selector!, equalityFn)
}