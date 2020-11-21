import React from 'react';
import history from '../../services/history';
import { Link } from 'react-router-dom';

import { Container, Content, Button } from './styles';

import api from '../../services/api';

export default function Home() {

    async function handleOnClick(gender) {
        await api.vote(gender);

        history.push("/thanks");
    }

    return (
        <Container>
            <h1>Vote no bebê Brito!</h1>
            <Content>
                <div>
                    <Button 
                        type="button" 
                        bgColor="#DB7093"
                        onClick={() => handleOnClick('girl')}
                    >
                        SOFIA
                    </Button>
                    <Button 
                        type="button" 
                        bgColor="#4682B4"
                        onClick={() => handleOnClick('boy')}
                    >
                        VITOR
                    </Button>
                </div>
            </Content>
            <Link to="/result">Acompanhar votação</Link>
        </Container>
    );
}