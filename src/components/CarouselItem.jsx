import React from 'react';
import { connect } from 'react-redux';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';
import '../assets/styles/CarouselItem.scss';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions'

const CarouselItem = (props) => {
    const { id, cover, title, year, contentRating, duration, isFavorite } = props;

    const handleSetFavorite = () => {
        props.setFavorite({...props});
    }

    const handleDeleteFavorite = (id) => {
        props.deleteFavorite(id);
    }

    return (
        <article className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    <img
                        className="carousel-item__details--img"
                        src={playIcon}
                        alt="Play Icon" />
                    {!isFavorite 
                        ? <img
                            className="carousel-item__details--img"
                            src={plusIcon}
                            alt="Plus Icon"
                            onClick={handleSetFavorite} /> 
                        : <img
                            className="carousel-item__details--img"
                            src={removeIcon}
                            alt="Remove Icon"
                            onClick={() => handleDeleteFavorite(id)} />
                    }
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--description">{`${year} ${contentRating} ${duration}`}</p>
            </div>
        </article>
    )
};

CarouselItem.propTypes = {
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
    cover: PropTypes.string,
};

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite
}

export default connect(null, mapDispatchToProps)(CarouselItem);