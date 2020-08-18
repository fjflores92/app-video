import React from 'react';
import Header from '../components/Header';
import Login from '../components/Login';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const SignIn = () => {

    return (
        <main className="app">
            <Header/>
            
            <Login/>

            <Footer/>
        </main>
    );
};

export default SignIn;
