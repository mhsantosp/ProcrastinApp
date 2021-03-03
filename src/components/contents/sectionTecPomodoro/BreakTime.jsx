import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import ImgRelojArena from '../../images/relojdearena.gif'
// import SecTecPomodoro from './SectionTecPomodoro'


export default function BreakTime({ title, changeTime, type, time, formatTime }) {
  return (
    <div>
      <div className="container-fluid d-flex flex-column align-items-center mb-4">
        <h2 className="titleWorkTime">{title}</h2>
        <img className="imgreloj" src={ImgRelojArena} alt="Reloj de Arena" />
      </div>
      <div className="row align-items-center">
        <div className="col-4 text-center">
          <button className="btn-time"
            onClick={() => changeTime(-60, type)}><FontAwesomeIcon icon={faMinus} /> Menos Tiempo</button>
        </div>
        <div className="col-4 p-0">
          <h3 className="time m-0">{formatTime(time)}</h3>
        </div>
        <div className="col-4 text-center">
          <button className="btn-time"
            onClick={() => changeTime(60, type)}><FontAwesomeIcon icon={faPlus} /> Más Tiempo</button>
        </div>
      </div>
    </div>
  )
}