import axios from 'axios';
import { TYPES } from '../types';

export const searchMoviesList = ({ query, page, lang }) => {
    const { VITE_GATEWAY } = import.meta.env;

    const request = axios.get(`${VITE_GATEWAY}/movies/search`, { params: { query, page, lang } })
        .then(response => {
            if (response.data.status === 200)
                return { moviesListData: { moviesList: response.data, options: { query, page, lang, pageState: 'search' }, error: false } }

            if (response.data.status !== 200)
                return { moviesListData: { moviesList: null, options: { query, page, lang, pageState: 'search' }, error: true } }
        })
        .catch(err => {
            console.log(err);
            return null;
        });

    return {
        type: TYPES.MOVIES_LIST,
        payload: request,
    }
}

export const moviesPopularList = ({ page, lang }) => {
    const { VITE_GATEWAY } = import.meta.env;

    const request = axios.get(`${VITE_GATEWAY}/movies/popular`, { params: { page, lang } })
        .then(response => {
            if (response.data.status === 200)
                return { moviesListData: { moviesList: response.data, options: { page, lang, pageState: 'popular' }, error: false } }

            if (response.data.status !== 200)
                return { moviesListData: { moviesList: null, options: { page, lang, pageState: 'popular' }, error: true } }
        })
        .catch(err => {
            console.log(err);
            return null;
        });

    return {
        type: TYPES.MOVIES_LIST,
        payload: request,
    }
}

export const movieItem = ({ id, lang }) => {
    const { VITE_GATEWAY } = import.meta.env;

    const request = axios.get(`${VITE_GATEWAY}/movie/${id}`, { params: { lang } })
        .then(response => {
            return { movieData: response.data }
        })
        .catch(err => {
            console.log(err);
            return null;
        });

    return {
        type: TYPES.MOVIE_ITEM,
        payload: request,
    }
}

export const sendMovieVote = ({ id, score }) => {
    const { VITE_GATEWAY } = import.meta.env;

    const data = {
        value: score,
    }

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    }

    const request = axios.post(`${VITE_GATEWAY}/movie/${id}/vote`, data, config)
        .then(response => {
            return { movieVote: response.data }
        })
        .catch(err => {
            console.log(err.message);
        });

    return {
        type: TYPES.MOVIE_VOTE,
        payload: request,
    }
}