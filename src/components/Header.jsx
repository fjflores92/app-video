import React, { Component } from 'react';
import userIcon from '../assets/static/user-icon.png';
import '../assets/styles/Header.scss';

const Header = ({ isAuth }) => (
    <header className="header">
        <div className="header__app">
            <h1 className="header__app--title">App Video</h1>
        </div>

        { isAuth && <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="" />
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>}
    </header>
);

export default Header;