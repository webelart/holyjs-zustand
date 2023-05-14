import { create } from 'zustand';
import { MovieType } from '@/types';

interface MovieTypeStore {
    movieType: MovieType | null;
    setMovieType: (val: MovieType | null) => void;
};

// export const useMovieType = create<MovieTypeStore>((set) => ());