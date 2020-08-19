import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import '../assets/styles/Register.scss';
import { registerRequest } from '../actions';

const Register = (props) => {

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
        props.registerRequest(form);
        history.push('/');
    }

    return (
        <section className="register">
            <div className="register__container">
                <h2>Regístrate</h2>
                <form className="register__container--form" onSubmit={handleSubmit}>
                    <input
                        name="name"
                        className="input"
                        type="text"
                        required
                        placeholder="Nombre"
                        onInput={handleInput} />
                    <input
                        name="email"
                        className="input"
                        type="email"
                        required
                        placeholder="Correo"
                        onInput={handleInput} />
                    <input
                        name="password"
                        className="input"
                        type="password"
                        required
                        placeholder="Contraseña"
                        onInput={handleInput} />
                    <button className="button">Registrarme</button>
                </form>
                <Link to="/sign-in">Iniciar sesión</Link>
            </div>
        </section>
    )
};

const mapDispatchToProps = {
    registerRequest,
}

export default withRouter(connect(null, mapDispatchToProps)(Register));