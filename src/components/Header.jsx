import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import userIcon from '../assets/static/user-icon.png';
import '../assets/styles/Header.scss';
import { logoutRequest } from '../actions';

const Header = (props) => {
    const { isAuth, history, user } = props;

    const logOut = event => {
        event.preventDefault();
        props.logoutRequest();
        history.push('/sign-in');
    }

    return (
        <header className="header">
            <div className="header__app">
                <Link to="/">
                    <h1 className="header__app--title">App Video</h1>
                </Link>
            </div>

            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={userIcon} alt="" />
                    <p>Perfil</p>
                </div>
                { isAuth
                ? <ul>
                    <li><Link to="/">{user.name}</Link></li>
                    <li><a href="#" onClick={logOut}>Cerrar Sesión</a></li>
                </ul>
                : <ul>
                    <li><Link to="/sign-in">Iniciar Sesión</Link></li>
                </ul> }
            </div>
        </header>
    )
};

const mapDispatchToProps = {
    logoutRequest,
}

const mapStateToProps = state => {
    return {
        isAuth: state.isAuth,
        user: state.user,
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));