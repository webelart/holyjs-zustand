import { Status, ShortMovie, GetMoviesResponse, MovieType } from '@/types';
import { fetchRequest } from '@/helpers/fetch-request';
import { createStore } from './createStore';

export interface MoviesStore {
  status: Status;
  loadedMovies: number;
  movies: ShortMovie[];
  total: number;
  loadMovies: (movieType: MovieType | null, reload?: boolean) => void;
  isAllMoviesLoaded: () => boolean;
};

const LOAD_STEP = 6;

export const useMovies = createStore<MoviesStore>(
  (set, get) => ({
      movies: [],
      loadedMovies: 0,
      total: 0,
      status: 'default',
      loadMovies: async (MovieType, reload) => {
        if (reload) {
          set({
            movies: [],
            loadedMovies: 0,
            total: 0,
            status: 'default'
          })
        }

        const { loadedMovies, movies } =  get();
        set({ status: 'loading' });

        try {
          const filterStr = MovieType ? `&filterType=${MovieType}` : '';
          const data = await fetchRequest<GetMoviesResponse>(`/api/movies?start=${loadedMovies}&end=${loadedMovies + LOAD_STEP}${filterStr}`);

          set({
            status: 'success',
            loadedMovies: Math.min(data.total, loadedMovies + LOAD_STEP),
            movies: [...movies, ...data.movies],
            total: data.total,
          });
        } catch (err) {
          set({ status: 'error' });
        }
      },
    isAllMoviesLoaded: () => get().loadedMovies === get().total
  }),
  'Movies'
);