import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '../../hooks/useQuery';
import { updateMovies } from '../../utils/reduxHandler';
import { getMoviesData } from '../../utils/moviesHandler';

const Popular = () => {
    document.title = 'Popular';
    // console.log('Popular loaded');

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const q = useQuery();
    const paramsQuery = q.get('query');
    const paramsPage = parseInt(q.get('page')) || 1;

    useEffect(() => {
        setLoading(true);
        dispatch(updateMovies({ page: paramsPage, query: paramsQuery })).then(() => {
            setLoading(false);
        });
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [q]);

    const { moviesListData } = useSelector(state => state.movies);
    const results = getMoviesData(moviesListData);

    return (
        <>
            <div className="popular-container" style={{ opacity: loading ? "0" : "1" }}>
                <div className="component-title">{moviesListData?.options?.pageState === 'search' ? `Resultados para '${moviesListData.options.query}'` : "Popular"}</div>
                {results}
            </div>
        </>
    );
}

export default Popular;