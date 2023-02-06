import React from "react";
import * as C from "./styles";

const ResumoItem = ({title, value }) => {
    
    return (
        <>
            <C.Conteiner> 
                
                <C.Header>
                    <C.HeaderTitle>{title}</C.HeaderTitle>
                    
                </C.Header>
                
                <C.Total>{value}</C.Total>
            </C.Conteiner>
            
        </>
    );
};

export default ResumoItem;