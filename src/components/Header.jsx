import React, { Component } from 'react';
import '../assets/styles/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props }
    }

    render() {
        return(
            <header className="header">
                <div className="header__app">
                    <h1 className="header__app--title">App Video</h1>
                </div>
                <div className="header__menu">
                    <div className="header__menu--profile">
                        <img src={userIcon} alt="" />
                        <p>Perfil</p>
                    </div>
                    <ul>
                        <li><a href="/">Cuenta</a></li>
                        <li><a href="/">Cerrar Sesión</a></li>
                    </ul>
                </div>
            </header>
        )
    };
}

export default Header;