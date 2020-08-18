import React from 'react';
import useApi from '../hooks/useApi';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const CATEGORIES_API = 'http://localhost:3000/categories';

const Home = () => {
    const categories = useApi(CATEGORIES_API);
    return categories.length === 0 ? <h1>Loading...</h1> : (
        <main className="home">
            <Search/>

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

export default Home;
