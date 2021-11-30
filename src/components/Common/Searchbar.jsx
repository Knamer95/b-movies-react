import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useQuery } from '../../hooks/useQuery';
import { updateMovies } from '../../utils/reduxHandler';
import { getUpdatedParams } from '../../utils/queryBuilder';
import SearchIcon from '../../assets/search.svg';

const SearchBar = React.memo(() => {
    // console.log('SearchBar loaded');
    const [loaded, setLoaded] = useState(false); // Control first load cases
    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch();
    const searchRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    const q = useQuery();
    const paramsQuery = q.get('query');
    const paramsPage = q.get('page');

    const [query, setQuery] = useState(paramsQuery || undefined);

    useEffect(() => {
        if (location.pathname === '/' && !loaded) {
            searchRef.current.click();
            setLoaded(true);
        }
    }, []); // location

    const onSubmit = (e) => {
        console.log(loaded);
        const page = !loaded && parseInt(paramsPage) > 0 ? parseInt(paramsPage) : 1;
        const updatedParams = { query: e.query, page };
        const params = getUpdatedParams(updatedParams) // The page on search must be 1, except on first load

        dispatch(updateMovies(updatedParams));
        navigate(`..${updatedParams.query ? '/results' : ''}${params ? `?${params.toString()}` : ''}`, { replace: true });
    }

    // https://stackoverflow.com/a/57943366
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="search-container">
                <input {...register("query")} className="search" type="text" placeholder="Buscar películas" value={query}
                    onInput={(e) => setQuery(e.target.value)} />
                <button type="submit" ref={searchRef}>
                    <img className="search-image" src={SearchIcon} alt="search_button" />
                </button>
            </div>
        </form>
    );
});

export default SearchBar;