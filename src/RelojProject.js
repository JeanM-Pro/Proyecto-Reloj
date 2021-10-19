import React, {useState, useEffect} from "react"

export const RelojProject = () => {
   
    const [minutos, setMinutos] = useState(25);
    const [segundos, setSegundos] = useState(20);

    



    const showMinutos = minutos < 10 ? `0${minutos}` : minutos;
    const showSegundos = segundos < 10 ? `0${segundos}` : segundos;


    return (
        <>
            <h1>{showMinutos}:{showSegundos}</h1>
            <button onClick={()=>{setMinutos(minutos + 1)}}>+</button>
            <button onClick={()=>{setMinutos(minutos - 1)}}>-</button>
            {/* <button onClick={()=>{play()}}>play</button> */}
        </>
    )
}