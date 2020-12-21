import React, {useState}from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import ImgRelojArena from '../../images/reloj-de-arena.png'

export default function BreakTime(){
    return(
        <div>
            <div>
                <h2 className="titleWorkTime">Tiempo de Descanso</h2>
                <img className="imgreloj" src={ImgRelojArena} alt="Reloj de Arena"/>
            </div>
            <div className="row mt-4">
                <div className="col-4">
                  <button className="btn-time"><FontAwesomeIcon icon={faMinus}/> Menos Tiempo</button>
                </div>
                <div className="col-4">
                   <h3 className="time">Time</h3>
                </div>
                <div className="col-4">
                  <button className="btn-time"><FontAwesomeIcon icon={faPlus}/> Más Tiempo</button>
                </div>
            </div>
        </div>
    )
}