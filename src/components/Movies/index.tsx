import { useEffect, Fragment } from 'react';

import { useMovies } from '@/stores/movies';
import { useMovieType } from '@/stores/movieType';
import Movie from '@/components/Movie';

export default function Home() {
  const [
    status,
    movies,
    loadMovies,
    isAllMoviesLoaded,
  ] = useMovies(state => [
    state.status,
    state.movies,
    state.loadMovies,
    state.isAllMoviesLoaded
  ]);

  const movieType = useMovieType(state => state.movieType);

  useEffect(() => {
    loadMovies(movieType, true);
  }, [ movieType ]);

  if (status === 'error') {
    return (
        <p className="mb-3">
            Уппс... Ошибка. Перезагрузите страницу и попробуйте ещё раз 🤞🏻
        </p>
    )
  }

  return (
    <Fragment>
      <div className="movies">
          {movies.map((item) => (
              <Movie
                  key={item.id}
                  {...item}
              />
          ))}
      </div>
      {!isAllMoviesLoaded() && (
        <button
          disabled={status === 'loading'}
          className="button-load"
          onClick={() => loadMovies(movieType)}
        >Ещё фильмов</button>
      )}
    </Fragment>
  )
}
