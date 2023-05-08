// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from 'next';
import { MovieType } from '@/types';
import movies from '@/data/movies.json';
import { formatMovies } from '@/helpers/format-movies';


import { Error, GetMoviesResponse } from '@/types';

export default async function getMovies(req: NextApiRequest, res: NextApiResponse<GetMoviesResponse | Error>) {
    const {start, end, filterType} = req.query;

    const startNum = Number(start);
    const endNum = Number(end);

    // TODO здесь нужно надёжно проверить тип фильтра.
    const filterMovie = filterType as unknown as MovieType;

    if (isNaN(startNum) || isNaN(endNum)) {
        return res.status(404).json({
            status: 400,
        });
    }

    const data = movies.filter((movie) => filterMovie ? movie.type === filterMovie : true);

    res.status(200).json({
        movies: formatMovies(data.slice(startNum, endNum)),
        total: data.length,
    });
}


