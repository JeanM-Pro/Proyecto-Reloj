import React from 'react'

export const FuncionLength2 = ({title, changeTime, type, time, formatTime}) => {
    
    return (
        <div>
            <h3>{title}</h3>
            <div className='time-sets'>
                <button id='session-decrement' className='btn-small blue darken-4' onClick={()=>{changeTime(-60, type)}}>
                    <i className='material-icons'>arrow_downward</i>
                </button>
                <h3>{formatTime(time)}</h3>
                <h3 id='session-length'>25</h3>
                <button id='session-increment' className='btn-small blue darken-4' onClick={()=>{changeTime(60, type)}}>
                    <i className='material-icons'>arrow_upward</i>
                </button>

            </div>
        </div>
    )
}