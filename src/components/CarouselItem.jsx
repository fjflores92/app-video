import React, { Component } from 'react';
import '../assets/styles/CarouselItem.scss';

class CarouselItem extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props }
    }

    render() {
        return(
            <article className="carousel-item">
                <img className="carousel-item__img" src={this.state.img} alt={this.state.alt} />
                <div className="carousel-item__details">
                    <div>
                        <img className="carousel-item__details--img" src="../assets/play-icon.png" alt="Play Icon" /> 
                        <img className="carousel-item__details--img" src="../assets/plus-icon.png" alt="Plus Icon" /> 
                    </div>
                    <p className="carousel-item__details--title">{this.state.title}</p>
                    <p className="carousel-item__details--description">{this.state.description}</p>
                </div>
            </article>
        )
    };
}

export default CarouselItem;