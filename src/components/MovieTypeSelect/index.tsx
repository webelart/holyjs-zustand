import Select from 'react-select';
import { MovieType } from '@/types';

type MovieOption = {
    [RegKey in MovieType]: { value: MovieType; label: string };
};

const optionsMap: MovieOption = {
    movie: { value: 'movie', label: 'Фильмы' },
    cartoon: { value: 'cartoon', label: 'Мультфильмы' },
};
const options = Object.values(optionsMap);

const MovieTypeSelect = () => {
    return (
        <Select
            options={options}
            placeholder="Фильтр по типу фильма"
            isClearable
            isSearchable={false}
            // value={movieType ? optionsMap[movieType] : null}
            // onChange={(selected) => setMovieType(selected ? selected.value : null)}
        />
    );
};

export default MovieTypeSelect;
