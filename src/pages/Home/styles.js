import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    width: 300px;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    justify-content: center;

    h1 {
        color: #fff;
        font-weight: bold;
        font-size: 40px;
        margin-top: 20px;
        text-align: center;
    }

    a {
        width: 100%;
        color: #fff;
        font-weight: bold;
        font-size: 20px;
        border: 1px solid #fff;
        text-align: center;
        padding: 10px;
        border-radius: 4px;
        margin-bottom: 50px;
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
    border-radius: 10px;
    background-color: ${props => props.bgColor};
    color: #fff;
    font-weight: bold;
    font-size: 30px;
    transition: background 0.2s;

    
    &:hover {
        background: ${props => darken(0.03, props.bgColor)};
    }
    
`;