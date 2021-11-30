import React from 'react';
import Header from './components/Common/Header';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // v6 Route -> Switch | v6 Navigate -> Redirect
import Breadcrumbs from './components/Common/Breadcrumbs';

const Popular = React.lazy(() => import('./components/Popular/Popular'));
const Results = React.lazy(() => import('./components/Results/Results'));
const Movie = React.lazy(() => import('./components/Movie/Movie'));
const NotFound = React.lazy(() => import('./components/NotFound/NotFound'));

const App = () => {

    return (
        <>
            <Router>
                <Header />
                <React.Suspense fallback={null}> {/* fallback={<span>Loading...</span>} */}

                    <Breadcrumbs />
                    <div className="container">
                        <Routes>
                            <Route path='/' element={<Popular />} />
                            <Route path="/popular" element={<Navigate replace to="/" />} />
                            <Route path='/results' element={<Results />} />
                            <Route path="/movie" element={<Navigate replace to="/" />} />
                            <Route path='/movie/:id' element={<Movie />} />
                            <Route path='/*' element={<NotFound />} />
                        </Routes>
                    </div>
                </React.Suspense>
            </Router>
        </>
    )
}

export default App;