import { create } from 'zustand';
import { MovieType } from '@/types';

export interface MovieTypeStore {
    movieType: MovieType | null;
    setMovieType: (val: MovieType | null) => void;
};

export const useMovieType = create<MovieTypeStore>((set) => ({
    movieType: null,
    setMovieType: (val: MovieType | null) => set({ movieType: val }),
}));