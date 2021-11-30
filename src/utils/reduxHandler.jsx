import { moviesPopularList, searchMoviesList, movieItem, sendMovieVote } from '../store/actions';

export const updateMovies = (params) => {
    const query = params.query || '';
    const page = params.page || 1;
    const lang = params.lang || 'es-ES';

    if (params.query)
        return searchMoviesList({ query, page, lang });
    else
        return moviesPopularList({ page, lang });
};

export const updateMovie = (id = 0, config) => {
    const lang = config?.lang || 'es-ES';

    if (id)
        return movieItem({ id, lang });
};

export const voteMovie = (id = 0, score) => {
    if (id && score) {
        try {
            return sendMovieVote({ id, score });
        } catch (err) {
            console.log(err);
        }
    }
};