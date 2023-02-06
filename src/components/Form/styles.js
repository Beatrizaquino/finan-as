import styled from "styled-components";

export const Conteiner = styled.div `
    maz-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: #015958;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    padding: 15px 0px;
    gap: 10px;

    @midia (max-width: 750px){
        display: grid;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`;

export const Label = styled.label`
    color: #fff;
`;

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #C7FFED;
`;

export const  RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input {
        margin-left: 20px;
        accent-color: black:
        margin-top: 0;
    }
`;

export const Button = styled.button`
    padding: 0px 40px;
    margin-right: 20px
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #023535;
    background-color:#D8FFDB;
    font-weight: bold;
    border: none;
`;