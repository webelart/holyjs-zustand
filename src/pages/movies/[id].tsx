import React from 'react';
import movies from '@/data/movies.json';
import { getTitleOfMovieType } from '@/helpers';
import MovieCard from '@/components/Movie';

interface MovieProps {
    id: string;
}

const movie = {
    id: 972742,
    type: "movie",
    name: "Девятая",
    description: "Петербург конца XIX века охвачен массовым увлечением оккультными науками и эзотерикой. Британка-медиум Оливия Рид приезжает в столицу Российской империи с гастролями и собирает на своих публичных спиритических сеансах толпы людей. В это время в городе происходит серия загадочных убийств - изувеченные тела девушек находят в разных концах города. Расследованием занимаются молодой полковник полиции Ростов и его помощник Ганин. С каждой новой жертвой дело становится всё запутаннее. Ростов решает обратиться к Оливии в надежде, что её подлинная или мнимая способность вызывать духов погибших может помочь выйти на след убийцы.",
    poster: {
        url: "https://st.kp.yandex.net/images/film_big/972742.jpg",
        previewUrl: "https://st.kp.yandex.net/images/film_iphone/iphone360_972742.jpg"
    },
    movieLength: 99,
    year: 2019,
    ageRating: 16,
    countries: [
        {
            name: "Россия"
        }
    ],
    genres: [
        {
            name: "детектив"
        },
        {
            name: "триллер"
        },
        {
            name: "криминал"
        }
    ],
    similarMovies: [
        {
            id: 945391,
            name: "Гоголь. Начало",
            type: "movie",
            poster: {
                url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/5ad7f814-8bb5-472c-b6f3-43fa75b65c46/orig",
                previewUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/5ad7f814-8bb5-472c-b6f3-43fa75b65c46/x1000"
            }
        }
    ],
    shortDescription: "Британка-медиум помогает ловить маньяка в Петербурге конца XIX века. Мистический детектив с Евгением Цыгановым"
}

const Movie: React.FC<MovieProps> = ({
    id
}) => {

    if (!movie) {
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
