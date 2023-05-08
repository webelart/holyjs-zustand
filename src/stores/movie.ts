import { Movie, GetMovieResponse, Status } from '@/types';
import { create } from 'zustand';
import { fetchRequest } from '@/helpers/fetch-request';

interface MovieStore {
  movie?: Movie;
  status: Status;
  loadMovie: (id: number) => void;
};

export const useMovie = create<MovieStore>((set, get) => ({
  movie: undefined,
  status: 'default',
  loadMovie: async (id) => {
    set({ status: 'loading' });

    try {
      const data = await fetchRequest<GetMovieResponse>(`/api/movie?id=${id}`);
      set({
        status: 'success',
        movie: data
      });
    } catch (err) {
      set({ status: 'error' });
    }
  },
}));