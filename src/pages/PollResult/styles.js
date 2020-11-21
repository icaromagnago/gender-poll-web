import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    width: 300px;
    height: 100%;
    flex-direction: column;
    align-items: center;
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
    width: 300px;
    height: 100%;
    align-items: center;
    justify-content: center;   
`;

export const Vote = styled.div`    
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.color};
    font-size: 40px;
    font-weight: bold;

    span {
        margin-bottom: 25px;
    }
    
`;