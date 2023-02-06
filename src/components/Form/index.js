import React, { useState } from "react";
import * as C from "./styles";


const Form = ({ handleAdd }) => {

    const [desc, setDesc] = useState("");
    const [amount, SetAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const gereteID = () => Math.round(Math.round(Math.random) * 1000);

    const handleSave = () => {

        if(!desc || !amount) {
            alert("Informe a descrição do valor!")
            return;
        } else if (amount < -1){
            alert("O valor deve ser positivo!")
            return;
        }

        const transaction = {
            id: gereteID(),
            desc: desc,
            amount: amount,
            expense: isExpense
        };

        handleAdd(transaction);

        setDesc("");
        SetAmount("");

    };

    return (
        <>
        <C.Conteiner>
            <C.InputContent>
                <C.Label>Descrição</C.Label>
                <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
            </C.InputContent>

            <C.InputContent>
                <C.Label>Valor</C.Label>
                <C.Input value={amount}  type="number" onChange={(e) => SetAmount(e.target.value)} />
            </C.InputContent>
            
            <C.RadioGroup>
                <C.Input 
                type="radio"
                id="rIncome"
                defaultChecked
                name="group1"
                onChange={() => setExpense(!isExpense)}
                />
                <C.Label htmlFor="rIncome">Entrada</C.Label>

                <C.Input 
                type="radio"
                id="rExpense"
                defaultChecked
                name="group1"
                onChange={() => setExpense(!isExpense)}
                />
                <C.Label htmlFor="rExpense">Saida</C.Label>
            </C.RadioGroup>
            <C.Button onClick={handleSave}>ADICIONAR</C.Button>
        </C.Conteiner>
            
        </>
    );
};

export default Form;