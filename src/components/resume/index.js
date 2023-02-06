import React from "react";
import * as C from "./styles";
import ResumoItem from "../resumeItems";

// import {
//    FaRegArrowAltCircleUp,
//    FaRegArrowAltCircleDown,
//    FaDollarSign,
//  } from "react-icons/fa";

function Resume({income, expense, total}) {
    return (
        <>
            <C.Conteiner>
                <ResumoItem title="Entradas" value={income} />
                <ResumoItem title="Saídas" value={expense} />
                <ResumoItem title="Total"  value={total}/>
            </C.Conteiner>
        </>
    );
}

export default Resume;