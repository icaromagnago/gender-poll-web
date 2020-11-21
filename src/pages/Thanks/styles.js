import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    width: 300px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        color: #fff;
        width: 300px;
        font-weight: bold;
        font-size: 25px;
        text-align: center;
    }

    div {
        display: flex;
        flex-direction: column;
        width: 300px;
        justify-content: space-between;
        margin-top: 15px;
        
        a {
            color: #fff;
            font-weight: bold;
            font-size: 15px;
            border: 1px solid #fff;
            width: 100%;
            margin-top: 15px;
            text-align: center;
            padding: 10px;
            border-radius: 4px;
        }
    }
`;