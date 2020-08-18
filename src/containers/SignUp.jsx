import React from 'react';
import Header from '../components/Header';
import Register from '../components/Register';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const SignUp = () => {

    return (
        <main className="app">
            <Header/>
            
            <Register/>

            <Footer/>
        </main>
    );
};

export default SignUp;