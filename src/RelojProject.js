import React, {useState} from "react"
import { FuncionLength1 } from "./FuncionLength1";
import { FuncionLength2 } from "./FuncionLength2";

export const RelojProject = () => {
   
    const [displayTime, setDisplayTime] = useState(25*60);
    const [breakTime, setBreakTime] = useState(5*60);
    const [sessionTime, setSessionTime] = useState(25*60);
    const [timerOn, setTimerOn] = useState(false);
    const [onBreak, setOnBreak] = useState(false);
    const [breakAlarma, setBreakAlarma] = useState(new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'));


    const playBreakAlarma = () => {
        breakAlarma.currentTime = 0;
        breakAlarma.play();

    }


    const formatTime= (time) => {
        let minutos = Math.floor(time/60);
        let segundos = time % 60;

        return (minutos < 10 ? `0${minutos}` : minutos) + ':' +
        (segundos < 10 ? `0${segundos}` : segundos);
    };

    const changeTime = (amount, type) =>{
        if(type === 'break'){
            if(breakTime <= 60 && amount < 0){
                return;
            }
            if(breakTime >= 3600 && amount > 0) return;
            setBreakTime((prev) => prev + amount)
        } else{
            if(sessionTime <= 60 && amount < 0){
                return;
            }
            if(sessionTime >= 3600 && amount > 0) return;
            setSessionTime((prev)=> prev + amount);
            if(!timerOn){
                setDisplayTime(sessionTime + amount)
            }
        }
    };

    const controlTime = () =>{
        let segundo = 1000;
        let date = new Date().getTime();
        let nextDate = new Date().getTime() + segundo;
        let onBreakVariable = onBreak;

        if(!timerOn){
            let interval = setInterval(()=>{
                date = new Date().getTime();
                if(date > nextDate){
                    setDisplayTime(prev => {
                        if(prev <= 0 && !onBreakVariable){
                            playBreakAlarma();
                            onBreakVariable = true;
                            setOnBreak(true);
                            return breakTime;
                        } else if(prev <= 0 && onBreakVariable){
                            playBreakAlarma();
                            onBreakVariable = false;
                            setOnBreak(false);
                            return sessionTime;
                        }
                        return prev - 1;
                    })

                    nextDate += segundo;
                }
                
            }, 30)
            localStorage.clear();
            localStorage.setItem('interval-id', interval)
        }
        if(timerOn){
            clearInterval(localStorage.getItem('interval-id'));
        }

        setTimerOn(!timerOn)
    };

    const resetTime = () =>{
        setDisplayTime(25*60);
        setBreakTime(5*60)
        setSessionTime(25*60)
    };

    return (
        <div className='center-align'>
            <h1>Pomodoro Clock</h1>
            <div className='dual-container'>
                <div id='break-label'>
                    <FuncionLength1 
                    title={'Break Length'} 
                    changeTime={changeTime} 
                    type={'break'} 
                    time={breakTime} 
                    formatTime={formatTime} />
                </div>

                <div id='session-label'>
                    <FuncionLength2 
                    title={'Session Length'} 
                    changeTime={changeTime} 
                    type={'session'} 
                    time={sessionTime} 
                    formatTime={formatTime} />
                </div>
            </div>
            

            <h3 id='timer-label'>{onBreak ? 'Break' : 'Session'}</h3>

            <h1 id='time-left'>{formatTime(displayTime)}</h1>

            <button id='start_stop' className='btn-large blue darken-4' onClick={controlTime}>
                {timerOn ? (
                    <i className='material-icons'>pause_circle_filled</i>
                ): (
                    <i className='material-icons'>play_circle_filled</i>)}
            </button>

            <button id='reset' className='btn-large blue darken-4' onClick={resetTime}>
                <i className='material-icons'>autorenew</i>
            </button>
        </div>
    
    )
    
}