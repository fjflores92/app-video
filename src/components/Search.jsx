import React, { Component } from 'react';
import '../assets/styles/Main.scss'
import '../assets/styles/Search.scss'

class Search extends Component {
    render() {
        return(
            <section className="search">
                <h2 className="search__title">¿Qué quieres ver hoy?</h2>
                <input type="text" className="input" placeholder="Buscar..." />
            </section>
        )
    };
}

export default Search;