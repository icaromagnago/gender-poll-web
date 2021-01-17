import React from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';

import image from '../../images/marcal.jpeg';
import { Container } from './styles';

export default function Obrigado() {
    return (
        <Container>
            <span>
                Agradecemos a sua participação!
                <FaThumbsUp />
            </span>
            <img src={image} alt="família Marçal" />
            <div>
                <Link to="/result">Acompanhar votação</Link>
                <Link to="/">Votar novamente</Link>
            </div>
        </Container>
    );
}