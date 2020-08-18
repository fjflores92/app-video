import React from 'react';
import '../assets/styles/ErrorPages.scss';

const NotFound = () => {
    return (
        <main className="errorPage">
            <section className="errorPage__container">
                <h1 className="errorPage__container--title">404 <br/> No Encontrado</h1>
            </section>
        </main>
    );
};

export default NotFound;
