import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import dayJS from 'dayjs';
import { updateMovie, voteMovie } from '../../utils/reduxHandler';
import { useParams } from 'react-router-dom';
import NoImage from '../../assets/no_image.png';
import NotFound from '../NotFound/NotFound';
import 'react-toastify/dist/ReactToastify.min.css';

const Movie = () => {
    document.title = 'Película';
    // console.log('Movie loaded');

    const { id } = useParams();
    const [loading, setLoading] = useState(true)
    const [fetching, setFetching] = useState(false)

    const { register, handleSubmit } = useForm();
    const { movieData } = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const config = {};
    const movie = movieData?.result;

    const notify = (message, error) => {
        if (error) toast.error(message)
        else toast.success(message)
    };


    useEffect(() => {
        dispatch(updateMovie(id, config)).then((response) => {
            console.log(response);
            setLoading(false);
        });
    }, [id]);

    const onSubmit = (e) => {
        if (e.score) {
            setFetching(true);

            dispatch(voteMovie(id, e.score)).then((result) => {
                const response = result.payload?.movieVote;

                if (!result.payload || result.payload?.status === 500) {
                    notify('Ocurrió un error con la petición', true);
                } else {
                    const message = response.result.status_code === 1 ? 'La nota ha sido registrada correctamente' : 'La nota se ha actualizado correctamente';
                    notify(message, false);
                }

                setFetching(false);
            });
        }
    }

    return (
        <>
            {movieData && !loading ?
                <>
                    <div className="movie-container">
                        <div className="movie-title">{movie?.title}</div>
                        <div className="movie-info-container">
                            <div className="cover-container">
                                <a href={`${movie?.poster_path ? `https://image.tmdb.org/t/p/original/${movie?.poster_path}` : NoImage}`} target="_blank" rel="noreferrer">
                                    <img className="cover-image" src={`${movie?.poster_path ? `https://image.tmdb.org/t/p/original/${movie?.poster_path}` : NoImage}`} />
                                </a>
                            </div>
                            <div>
                                <table className="movie-info">
                                    <tbody>
                                        <tr>
                                            <td className="movie-property">Título original</td>
                                            <td><span>{movie?.original_title}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="movie-property">Sinopsis</td>
                                            <td><span>{movie?.overview || 'Sin descripción'}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="movie-property">Género</td>
                                            <td>{movie?.genres > 0 ? movie?.genres.map(genre => <span key={genre.name}>{`${genre.name}.`}&nbsp;</span>) : 'Sin género'}</td>
                                        </tr>
                                        <tr>
                                            <td className="movie-property">Fecha de estreno</td>
                                            <td><span>{movie?.release_date ? dayJS(movie.release_date).format("DD-MM-YYYY") : 'Próximamente'}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="movie-property">Página web</td>
                                            <td><span>{movie?.homepage ? <a href={movie.homepage} target="_blank" rel="noopener noreferrer">{movie?.homepage}</a> : 'Sin página web'}</span></td>
                                        </tr>
                                        <tr>
                                            <td className="movie-property">Valoración</td>
                                            <td><span>{movie?.vote_average}</span>&nbsp;<span className="n-votes">({movie?.vote_count} votos)</span></td>
                                        </tr>
                                        <tr>
                                            <td className="movie-property">Votar</td>
                                            <td>
                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                    <input {...register("score")} type="number" min="1" max="10" step="0.5" />&nbsp;<button className="vote-movie" disabled={fetching}>Enviar</button>
                                                </form>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </> : null
            }
            {!movieData && !loading ?
                <NotFound /> : null}
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick
                rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </>
    );
}

export default Movie;