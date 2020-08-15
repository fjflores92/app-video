import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const App = () => {
    return(
        <div className="app">
            <Header/>
            <Search/>
            <Category title="Lo más perrón">
                <Carousel>
                    <CarouselItem
                        img="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/1427741/pexels-photo-1427741.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/233129/pexels-photo-233129.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                </Carousel>
            </Category>
            <Category title="Lo más cagado">
                <Carousel>
                    <CarouselItem
                        img="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/1427741/pexels-photo-1427741.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/233129/pexels-photo-233129.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                </Carousel>
            </Category>
            <Category title="Lo más visto">
                <Carousel>
                    <CarouselItem
                        img="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/1427741/pexels-photo-1427741.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/705792/pexels-photo-705792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/904276/pexels-photo-904276.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/233129/pexels-photo-233129.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                    <CarouselItem
                        img="https://images.pexels.com/photos/413879/pexels-photo-413879.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt=""
                        title="Título descriptivo"
                        description="2019 16+ 114 minutos"
                    />
                </Carousel>
            </Category>
        </div>
    );
};

export default App;
