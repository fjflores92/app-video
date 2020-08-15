import React, { Component } from 'react';
import '../assets/styles/Main.scss'
import '../assets/styles/Category.scss'

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Title'
        }
    }

    render() {
        return(
            <section className="category">
                <h3 className="category__title">{this.state.title}</h3>
            </section>
        )
    };
}

export default Category;