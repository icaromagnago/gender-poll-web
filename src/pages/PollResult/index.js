import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Vote } from './styles.js';

import api from '../../services/api';

export default function PollResult() {

    const [pollResult, setPollResult] = useState({});

    useEffect(() => {
        let unsub = api.onVoteResult(setPollResult);

        return unsub; //executado quando o componente é destruído
    }, []);


    return (
        <Container>
            <Content>
                <Vote color="#DB7093">
                    <span>{pollResult.girl}%</span>
                    <p>SOFIA</p>
                </Vote>
                <Vote color="#4682B4">
                    <span>{pollResult.boy}%</span>
                    <p>VITOR</p>
                </Vote>
            </Content>
            <Link to="/">Tela inicial</Link>
        </Container>
    );
}