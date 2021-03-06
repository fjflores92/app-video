import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const Home = ({ myList, categories }) => {
    return (
        <main className="home">
            <Search/>

            {myList.length > 0 &&
                <Category title="Mis favoritos">
                    <Carousel>
                    {myList.map(item => 
                        <CarouselItem
                            key={`fav_${item.id}`} {...item}
                            isFavorite={true}/>
                    )}
                    </Carousel>
                </Category>
            }

            {categories.map(category =>
                <Category key={category.title} title={category.title}>
                    <Carousel>
                    {category.videos.map(video =>
                        <CarouselItem key={video.id} {...video} />
                    )}
                    </Carousel>
                </Category>
            )}
        </main>
    );
};

const mapStateToProps = state => {
    return {
        myList: state.myList,
        categories: state.categories
    }
}

export default connect(mapStateToProps, null)(Home);