import { Movie, GetMovieResponse, Status } from '@/types';
import { create } from 'zustand';
import { fetchRequest } from '@/helpers/fetch-request';

interface MovieStore {
  movie?: Movie;
  status: Status;
  loadMovie: (id: number) => void;
};

// export const useMovie = create<MovieStore>((set, get) => (}));