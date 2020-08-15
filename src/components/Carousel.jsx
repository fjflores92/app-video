import React, { Component } from 'react';
import '../assets/styles/Carousel.scss';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props }
    }

    render() {
        return(
            <section className="carousel">
                <div className="carousel__container">
                    {this.state.children}
                </div>
            </section>
        )
    };
}

export default Carousel;