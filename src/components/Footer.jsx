import React, { Component } from 'react';
import '../assets/styles/Footer.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props }
    }
    
    render() {
        return(
            <footer className="footer">
                <a href="/">Terminos de uso</a>
                <a href="/">Declaración de privacidad</a>
                <a href="/">Centro de ayuda</a>
            </footer>
        )
    };
}

export default Footer;