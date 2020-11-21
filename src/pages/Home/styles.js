import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    flex: 1;
    align-items: center;
    padding: 10px;

    h1 {
        color: #fff;
        font-weight: bold;
        font-size: 40px;
        margin-top: 20px;
        text-align: center;
    }
`;

export const Content = styled.div`
    display: flex;
    max-width: 400px;
    height: 100%;
    flex: 1;
    align-items: center;
    justify-content: center;   

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export const Button = styled.button`
    border: 0;
    height: 100px;
    width: 250px;
    padding: 20px;
    margin: 20px;
    border-radius: 50px;
    background-color: ${props => props.bgColor};
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    transition: background 0.2s;

    
    &:hover {
        background: ${props => darken(0.03, props.bgColor)};
    }
    
`;