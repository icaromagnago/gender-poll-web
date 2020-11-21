import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    width: 400px;
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
`;

export const Content = styled.div`
    display: flex;
    width: 400px;
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
    font-size: 45px;
    font-weight: bold;

    span {
        margin-bottom: 25px;
    }
    
`;