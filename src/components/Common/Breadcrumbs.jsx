import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <>
            <div className="breadcrumbs-container">
                <div className="breadcrumbs flat absolute z-30">
                    <ul>
                        {breadcrumbs.map(({ match, breadcrumb }, index) => {
                            const toLower = breadcrumb?.props?.children.toLowerCase();
                            return (
                                <span key={match.pathname}>
                                    {(breadcrumbs.length - 1) !== index
                                        ? <><NavLink to={match.pathname}>{toLower}</NavLink><span className="separator">&gt;</span></>
                                        : <span>{toLower}</span>
                                    }
                                </span>
                            )
                        })}

                        {/* breadcrumbs.map(({ breadcrumb, match }, index) => (
                                    <li className="bc inline-block" data-selected={index === (breadcrumbs.length - 1)} key={match.url}>
                                        <Link className="element" to={match.url || ''}>{breadcrumb}</Link>
                                    </li>
                        )) */}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Breadcrumbs;