import styled from "styled-components";


export const Conteiner = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #008F8C;
    padding: 5px 15px;
    border-radius: 20px;
    width: 30%;

    @media(max-width: 750px){
        width: 20%;

        
    p {
        font-size: 12px;
    }

    span {
        font-size: 20px;
    }

    svg {
        display:none;
    }
    }

`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;
    margin: 20px;

    svg{
        heigth: 25px;
        width: 25px;
    }
`;

export const HeaderTitle = styled.p`
    font-size: 20px;
    color: #fff;
`;


export const Total = styled.span`
    font-size: 30px;
    font-weight: bold;
    color: #fff;
`;