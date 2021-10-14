import React, {useState, useEffect} from "react"

export const RelojProject = () => {
    const [minutos, setMinutos] = useState(0)
    const [segundos, setSegundos] = useState(5)
    const [descanso, setDescanso] = useState(true)

    useEffect(()=>{
    
        let interval = setInterval(() => {
            clearInterval(interval)
            if(minutos === 0 && segundos === 0) {
                setDescanso(!descanso)
                if(descanso) {
                    setMinutos(5)
                    setSegundos(0)
                } else {
                    setMinutos(25)
                    setSegundos(0)
                    setDescanso(false)
                }
            }
            if(segundos === 0) {
                if(minutos !== 0) {
                    setSegundos(59)
                    setMinutos(minutos -1)
                }
                else {
                    
                }
            } else setSegundos(segundos -1)
            
        }, 1000)
    }, [minutos, segundos, descanso])

    const formatearMinutos = minutos < 10 ? `0${minutos}`: minutos
    const formatearSegundos = segundos < 10 ? `0${segundos}`: segundos

    return (
        <div>
            <h1>{descanso ? 'Hora de descansar' : 'Hora de Trabajar'}</h1>
            <h1>{formatearMinutos}:{formatearSegundos}</h1>
            <button onClick={() => setMinutos(minutos +1)}>+</button>
            <button onClick={() => setMinutos(minutos -1)}>-</button>
        </div>
    )
}