import Movie from './components/movie';
import Popular from './components/popular';

export default [
    {
        path: '/',
        Component: Popular,
    },
    {
        path: '/popular',
        Component: Popular,
    },
        {
        path: '/movies/movie/:id',
        Component: Movie,
    },
];