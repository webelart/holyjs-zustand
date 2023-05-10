import { MovieType } from '@/types';
import { createStore } from './createStore';

export interface MovieTypeStore {
    movieType: MovieType | null;
    setMovieType: (val: MovieType | null) => void;
};

export const useMovieType = createStore<MovieTypeStore>(
    (set) => ({
        movieType: null,
        setMovieType: (val: MovieType | null) => set({ movieType: val }),
    }),
    'movieType'
);