import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    width: 300px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    span {
        color: #fff;
        width: 300px;
        font-weight: bold;
        font-size: 40px;
        text-align: center;

        svg {
            margin-left: 10px;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        width: 300px;
        justify-content: space-between;
        
        a {
            color: #fff;
            font-weight: bold;
            font-size: 20px;
            border: 1px solid #fff;
            width: 100%;
            margin-top: 15px;
            text-align: center;
            padding: 15px;
            border-radius: 4px;
        }
    }

    img {
        width: 180px;
        height: 180px;
        border-radius: 90px;
    }
`;