import React, { useEffect, useState } from 'react';

import { Container, Content, Vote } from './styles.js';

import api from '../../services/api';

export default function PollResult() {

    const [pollResult, setPollResult] = useState({});

    useEffect(() => {
        let unsub = api.onVoteResult(setPollResult);

        return unsub; //executado quando o componente é destruído
    }, [pollResult]);



    return (
        <Container>
            <h1>Resultado</h1>
            <Content>
                <Vote color="#4682B4">
                    <span>{pollResult.boy}%</span>
                    <p>VITOR</p>
                </Vote>
                <Vote color="#DB7093">
                    <span>{pollResult.girl}%</span>
                    <p>SOFIA</p>
                </Vote>
            </Content>
        </Container>
    );
}