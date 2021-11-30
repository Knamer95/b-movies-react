import React from 'react';
import NotFoundImage from '../../assets/not_found.png';

const NotFound = React.memo(() => {
    document.title = 'Error 404';
    // console.log('NotFound loaded');

    return (
        <>
            <div className="component-container">
                <div className="not-found-container">
                    <div className="title">Error 404</div>
                    <div className="subtitle">Oops, parece que la página a la que intentas acceder no existe</div>
                    <img src={NotFoundImage} alt="Imagen no encontrada" />
                </div>
            </div>
        </>
    );
});

export default NotFound;