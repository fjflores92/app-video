import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/static/user-icon.png';
import '../assets/styles/Header.scss';

const Header = ({ isAuth }) => (
    <header className="header">
        <div className="header__app">
            <Link to="/">
                <h1 className="header__app--title">App Video</h1>
            </Link>
        </div>

        { isAuth && <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="" />
                <p>Perfil</p>
            </div>
            <ul>
                <li><Link to="/">Cuenta</Link></li>
                <li><Link to="/">Cerrar Sesión</Link></li>
            </ul>
        </div>}
    </header>
);

export default Header;