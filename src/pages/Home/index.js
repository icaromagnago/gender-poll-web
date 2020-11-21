import React from 'react';
import history from '../../services/history';

import { Container, Content, Button } from './styles';

import api from '../../services/api';

export default function Home() {

    async function handleOnClick(gender) {
        console.log(gender);
        await api.vote(gender);

        history.push("/obrigado");
    }

    return (
        <Container>
            <h1>Vote no bebê Brito!</h1>
            <Content>
                <div>
                    <Button 
                        type="button" 
                        bgColor="#4682B4"
                        onClick={() => handleOnClick('boy')}
                    >
                        VITOR
                    </Button>

                    <Button 
                        type="button" 
                        bgColor="#DB7093"
                        onClick={() => handleOnClick('girl')}
                    >
                        SOFIA
                    </Button>
                </div>
            </Content>
        </Container>
    );
}