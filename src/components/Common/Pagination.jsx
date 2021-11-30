import { useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { useQuery } from '../../hooks/useQuery';
import { getUpdatedParams } from '../../utils/queryBuilder';

const Pagination = ({ moviesListData }) => {
    // console.log('Pagination');
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const parent = useLocation().pathname;
    const q = useQuery();
    const paramsQuery = q.get('query');
    const paramsPage = parseInt(q.get('page')) || 1;

    const toDisplay = 5;
    const bound = Math.floor(toDisplay / 2);
    const totalPages = moviesListData?.moviesList?.result?.total_pages;

    let range = [null, null];

    if (totalPages) {
        // const paramsPage = moviesListData?.options?.page;
        const isLess = !!(paramsPage - bound < 1);
        const isMore = !!(paramsPage + bound > totalPages);

        if (totalPages < toDisplay || isLess) {
            range = [1, toDisplay < totalPages ? toDisplay : totalPages];
        } else if (!isLess && !isMore) {
            range = [paramsPage - bound, paramsPage + bound];
        } else if (isMore)
            range = [totalPages - toDisplay, totalPages];
    }

    const sendPage = (page) => {
        const intPage = parseInt(page);
        const updatedPage = intPage && intPage > 1 && intPage <= totalPages ? intPage : 1;
        const params = getUpdatedParams({ query: paramsQuery, page: updatedPage }) // The page on search must be 1, except on first load
        navigate(`..${parent}${params ? `?${params.toString()}` : ""}`, { replace: true });
    }

    const pages = [];
    for (let i = range[0]; i <= range[1]; i++) {
        pages.push(<button key={i} data-selected={!!(paramsPage === i)} type="button" value={i} onClick={() => sendPage(i)}>{i}</button>);
    }

    const onSubmit = (e) => {
        const page = parseInt(e.page) > totalPages || parseInt(e.page) < 1 ? 1 : parseInt(e.page);
        const updatedParams = { query: paramsQuery, page };
        const params = getUpdatedParams(updatedParams) // The page on search must be 1, except on first load
        navigate(`..${parent}${params ? `?${params.toString()}` : ""}`, { replace: true });
    }

    return (
        <>
            <div className="pagination-container">
                <div className="pagination-info">
                    <span>Página {paramsPage} de {totalPages}</span>
                </div>
                <div className="pagination">

                    <button className="direction prev" type="button" onClick={() => sendPage(paramsPage - 1)}
                        disabled={paramsPage > 1 ? "" : "disabled"}>prev</button>
                    <span className="separator">|</span>


                    {pages.length > 0 ? pages : null}

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("page")} type="number" step="1" min="1" max={totalPages} placeholder={paramsPage} />
                    </form>

                    <span className="separator">|</span>
                    <button className="direction next" type="button" onClick={() => sendPage(paramsPage + 1)}
                        disabled={paramsPage < totalPages ? "" : "disabled"}>next</button>
                </div>
            </div>
        </>
    );
}

export default Pagination;