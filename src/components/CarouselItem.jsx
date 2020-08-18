import React from 'react';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import '../assets/styles/CarouselItem.scss';
import PropTypes from 'prop-types';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
    <article className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title} />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" /> 
                <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" /> 
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--description">{`${year} ${contentRating} ${duration}`}</p>
        </div>
    </article>
);

CarouselItem.propTypes = {
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
    cover: PropTypes.string,
};

export default CarouselItem;