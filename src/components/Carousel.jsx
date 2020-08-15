import React, { Component } from 'react';
import '../assets/styles/Carousel.scss';
import CarouselItem from './CarouselItem';

class Carousel extends Component {
    render() {
        return(
            <section className="carousel">
                <div className="carousel__container">
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                </div>
            </section>
        )
    };
}

export default Carousel;