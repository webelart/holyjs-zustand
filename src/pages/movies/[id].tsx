import React, {useEffect} from 'react';
import { useMovieStore } from '@/stores';
import movies from '@/data/movies.json';
import { getTitleOfMovieType } from '@/helpers';
import MovieCard from '@/components/Movie';

interface MovieProps {
    id: string;
}

const Movie: React.FC<MovieProps> = ({
    id
}) => {
	const [
        status,
        movie,
        loadMovie,
    ] = useMovieStore(state => [
        state.status,
        state.movie,
        state.loadMovie,
    ]);

    useEffect(() => {
        loadMovie(Number(id));
    }, []);

    if (!movie || status === 'loading') {
        return <p>Loading...</p>
    }

    return (
        <div className="movie-opened">
            <h1>{movie.name}</h1>
            <div className="card">
                <img
                    src={movie.poster.url}
                    alt={movie.name}
                />
                <dl>
                    <dt>Тип</dt>
                    <dd>{getTitleOfMovieType(movie.type)}</dd>
                    <dt>Год</dt>
                    <dd>{movie.year || 'неизвестен'}</dd>
                    <dt>Продолжительность</dt>
                    <dd>{movie.movieLength || 'без понятия'} мин.</dd>
                    <dt>Жанры</dt>
                    <dd>{movie.genres.map((genre) => genre.name).join(' - ')}</dd>
                    <dt>Страны</dt>
                    <dd>{movie.countries.map((country) => country.name).join(' - ')}</dd>
                    <dt>Описание</dt>
                    <dd>{movie.description}</dd>
                </dl>
            </div>
            <h2>Похожие фильмы</h2>
            <div className="card-small-list">
                {!movie.similarMovies.length && (<p>Не найдено.</p>)}
                {movie.similarMovies.map((item) => (
                    <MovieCard
                        id={item.id}
                        type={''}
                        key={item.id}
                        name={item.name}
                        url={item.poster.url}
                    />
                ))}
            </div>
        </div>
    )
}

export default Movie;

export async function getStaticPaths() {
    const paths = movies.map((movie) => ({
		params: { 
			id: String(movie.id)
		}
    }));

    return {
		paths,
		fallback: 'blocking'
    }
}

interface ParamsProps {
    params: {
        id: string;
    }
}

export async function getStaticProps({ params: { id }}: ParamsProps) {
	return {
		props: {
			id
		}
	};
}
