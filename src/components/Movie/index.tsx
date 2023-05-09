import React from 'react';
import Link from 'next/link';
import { ShortMovie } from '@/types';

import { useMovieStore } from '@/stores';

interface MovieProps extends ShortMovie {}

const Movie: React.FC<MovieProps> = ({
    id,
    name,
    url,
    shortDescription,
}) => {
    return (
        <Link href={`/movies/${id}`} className="movie">
            <div className="movie-image">
                <img src={url} alt={name} />
            </div>
            <div className="movie-cover">
                <h2>{name}</h2>
                {shortDescription && (<p>{shortDescription}</p>)}
            </div>
        </Link>
    );
}

export default Movie;