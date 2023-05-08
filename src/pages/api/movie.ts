// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import movies from '@/data/movies.json';


import { Error, Movie } from '@/types'

export default async function getMovie(req: NextApiRequest, res: NextApiResponse<Movie | Error>) {
    const { id } = req.query;

    const movie = movies.find((movie) => String(movie.id) === id);

    if (!movie) {
        return res.status(404).json({
            status: 404,
        });
    }

    res.status(200).json(movie);
}
