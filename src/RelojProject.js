import React, {useState} from 'react'


export const RelojProject = () => {


    const [descanso, setDescanso] = useState(5);

    const breakDown = () => {
        if (descanso > 1) setDescanso(descanso - 1);
    }

    const breakUp = () => {
        setDescanso(descanso + 1);
    };

    const [sesion, setSesion] = useState(25);

    const sesionDown = () => {
        if(sesion > 1) setSesion(sesion - 1);
    };

    const sesionUp = () => {
        setSesion(sesion + 1)
    }



    return (
        <>
            <div className='content'>
                <div className='content-app'>
                    <div className='titulo'>
                        <h1>Contador 25 + 5</h1>
                    </div>

                    <div className='contador'>

                        <div className='contadores'>
                            <div id='break-label'>Tiempo de Descanso</div>
                            <div className='botones'>
                                <button type='button' id="break-decrement" onClick={breakDown}>-</button>
                                <div id="break-length">{descanso}</div>
                                <button type='button' id="break-increment" onClick={breakUp}>+</button>
                            </div>
                        </div>

                        <div className='contadores'>
                            <div id='session-label'>Tiempo de Sesión</div>
                            <div className='botones'>
                                <button type='button' id="session-decrement" onClick={sesionDown}>-</button>
                                <div id="session-length">{sesion}</div>
                                <button type='button' id="session-increment" onClick={sesionUp}>+</button>
                            </div>
                        </div>

                    </div>

                    <div className='time-content'>
                        <div id='timer-label'>
                            Session
                        </div>

                        <div id='time-left'>
                            {sesion}:00
                        </div>
                    </div>

                    <div className='timer-control'>
                        <button id='start_stop'>
                        Play/Pause
                        </button>

                        <button id="reset">
                            Reset
                        </button>

                    </div>

                </div>
            </div>
        </>
    )
}
