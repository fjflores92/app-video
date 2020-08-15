import React from 'react';

const HolaMundo = () => {
    const Hello = '¡Hola Mundo!';
    const isTrue = true;
    return(
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Primeros pasos con React</h2>
            <img src="https://arepa.s3.amazon.com/react.png" alt="React" />
            {isTrue ? <h4>Es verdadedo</h4> : <h5>Es falso</h5>}
            {isTrue && <h4>Verdadeo</h4>}
        </div>
    );
};

export default HolaMundo;