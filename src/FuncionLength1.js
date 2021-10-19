import React from 'react'

export const FuncionLength1 = ({title, changeTime, type, time, formatTime}) => {
    
    return (
        <div>
            <h3>{title}</h3>
            <div className='time-sets'>
                <button id='break-decrement' className='btn-small blue darken-4' onClick={()=>{changeTime(-60, type)}}>
                    <i className='material-icons'>arrow_downward</i>
                </button>
                <h3>{formatTime(time)}</h3>
                <h3 id='break-length'>5</h3>
                <button id='break-increment' className='btn-small blue darken-4' onClick={()=>{changeTime(60, type)}}>
                    <i className='material-icons'>arrow_upward</i>
                </button>

            </div>
        </div>
    )
}
