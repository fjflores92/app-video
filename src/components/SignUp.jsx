import React, { Component } from 'react';
import '../assets/styles/SignUp.scss';

const SignUp = () => (
    <section className="register">
        <div className="register__container">
            <h2>Regístrate</h2>
            <form className="register__container--form">
                <input className="input" type="text" placeholder="Nombre" />
                <input className="input" type="text" placeholder="Correo" />
                <input className="input" type="password" placeholder="Contraseña" />
                <button className="button">Registrarme</button>
            </form>
            <a href="">Iniciar sesión</a>
        </div>
    </section>
);

export default SignUp;