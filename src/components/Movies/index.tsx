import { ShortMovie as ShortMovieType } from '@/types';
import Movie from '@/components/Movie';

import movies from '@/data/movies.json';
import { formatMovies } from '@/helpers/format-movies';

const formattedMovies = formatMovies(movies);

export default function Home() {
  const movies: ShortMovieType[] = [...formattedMovies];

  // if (status === 'error') {
  //   return (
  //       <p> Уппс... Ошибка. Перезагрузите страницу и попробуйте ещё раз 🤞🏻</p>
  //   );
  // }

  return (
    <div className="movies">
        {movies.map((item) => (
            <Movie
                key={item.id}
                {...item}
            />
        ))}
    </div>
  )
}
