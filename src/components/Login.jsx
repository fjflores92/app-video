import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/Login.scss';
import { loginRequest } from '../actions';

const Login = (props) => {

    const [form, setValues] = useState({
        email: '',
    });

    const { history } = props;

    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.loginRequest(form);
        history.push('/');
    }

    return (
        <section className="login">
            <div className="login__container">
                <h2>Inicia sesión</h2>
                <form className="login__container--form" onSubmit={handleSubmit}>
                    <input
                        name="email"
                        className="input"
                        type="email"
                        required
                        placeholder="Correo"
                        onInput={handleInput}
                    />
                    <input
                        name="password"
                        className="input"
                        type="password"
                        required
                        placeholder="Contraseña"
                        onInput={handleInput}
                    />
                    <button className="button">Iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div><img src={googleIcon} /> Inicia sesión con Google</div>
                    <div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">No tienes ninguna cuenta <Link to="/sign-up">Regístrate</Link></p>
            </div>
        </section>
    )
};

const mapDispatchToProps = {
    loginRequest,
}

export default withRouter(connect(null, mapDispatchToProps)(Login));