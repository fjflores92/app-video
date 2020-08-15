import React from 'react';
import '../assets/styles/App.scss';
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';

const App = () => {
    return(
        <div className="app">
            <Header/>
            <Search/>
            <Category title="Lo más perrón"/>
            <Category title="Lo más cagado"/>
            <Category title="Lo más visto"/>
        </div>
    );
};

export default App;
