import React, { Component } from 'react';
import '../assets/styles/Category.scss';
import Carousel from './Carousel';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props }
    }

    render() {
        return(
            <section className="category">
                <h3 className="category__title">{this.state.title}</h3>
                <Carousel/>
            </section>
        )
    };
}

export default Category;