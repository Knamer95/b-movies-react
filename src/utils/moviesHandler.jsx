import { NavLink } from 'react-router-dom';
import dayJS from 'dayjs';
import Pagination from '../components/Common/Pagination';
import NoImage from '../assets/no_image.png';

export const getMoviesData = (moviesListData) => {
    return (
        <>
            {moviesListData?.error && (!moviesListData?.moviesList) ? <span>Ocurrió un error al intentar recoger los datos del servidor :(</span> : null}
            {!moviesListData?.error && (moviesListData?.moviesList && moviesListData?.moviesList?.result?.results.length === 0) ? <span>No results.</span> : null}
            {moviesListData?.moviesList && Object.keys(moviesListData.moviesList).length !== 0
                ?
                <>
                    <div className="movies-container">
                        {moviesListData.moviesList?.result?.results?.map(movie => (
                            <div className="card" key={movie.id} style={{ backgroundImage: `url(${movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : NoImage})` }}>
                                <NavLink to={`/movie/${movie.id}`} />
                                <div className="card-info">
                                    <div className="title" title={movie.title}>{movie.title}</div>
                                    <div className="sub-info"><span className="release-date">{movie.release_date ? dayJS(movie.release_date).format("DD-MM-YYYY") : 'Próximamente'}</span> <span className="votes">💛{movie.vote_average}</span></div>
                                    {/* <div className="vote-average">{movie.vote_average}</div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                    <Pagination moviesListData={moviesListData} />
                </>
                :
                null}
        </>
    );
}