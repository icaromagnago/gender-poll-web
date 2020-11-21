import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Obrigado() {
    return (
        <Container>
            <span>A Família Brito agradece a sua participação!</span>
            <div>
                <Link to="/">Votar novamente</Link>
                <Link to="/result">Ver resultado</Link>
            </div>
        </Container>
    );
}