import { Status, ShortMovie, GetMoviesResponse, MovieType } from '@/types';
import { create } from 'zustand';
import { fetchRequest } from '@/helpers/fetch-request';

interface MoviesStore {
  status: Status;
  loadedMovies: number;
  movies: ShortMovie[];
  total: number;
  loadMovies: (movieType: MovieType | null, reload?: boolean) => void;
  isAllMoviesLoaded: () => boolean;
};

const LOAD_STEP = 6;

// export const useMovies = create<MoviesStore>((set, get) => ({}));