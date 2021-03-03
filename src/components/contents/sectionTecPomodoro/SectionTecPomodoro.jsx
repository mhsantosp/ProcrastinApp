import React, { useState } from 'react';
import BreakTime from './BreakTime';
import WorkTime from './WorkTime';
import AlarmMessage from './AlarmMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';

export default function SectionTecPomodoro() {

  
  const [displayTime, setDisplayTime] = useState(25 * 60);
  const [breakTime, setBreakTime] = useState(5 * 60);
  const [workTime, setWorkTime] = useState(25 * 60);
  const [timerOn, setTimerOn] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const [breakAudio, setBreakAudio] = React.useState(new Audio('../../images/breakAlarm.mp3'))

  const playBreakSound = () => {
    breakAudio.currentTime = 0;
    breakAudio.play();
  }

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  }

  const changeTime = (amount, type) => {
    if (type == "Descanso") {
      if (breakTime <= 60 && amount < 0) {
        return;
      }
      setBreakTime((prev) => prev + amount);
    } else {
      if (workTime <= 60 && amount < 0) {
        return;
      }
      setWorkTime((prev) => prev + amount);
      if (!timerOn) {
        setDisplayTime(workTime + amount);
      }
    }
  }

  const controlTime = () => {
    let second = 1000;
    let date = new Date().getTime();
    let nextDate = new Date().getTime() + second;
    let onBreakVariable = onBreak;

    if (!timerOn) {
      let interval = setInterval(() => {
        date = new Date().getTime();
        if (date > nextDate) {
          setDisplayTime(prev => {
            if (prev <= 0 && !onBreakVariable) {
              playBreakSound();
              onBreakVariable = true;
              setOnBreak(true);
              return breakTime;
            } else if (prev <= 0 && onBreakVariable) {
              playBreakSound();
              onBreakVariable = false;
              setOnBreak(false);
              return workTime;
            }
            return prev - 1;
          })
          nextDate += second;
        }
      }, 30);
      localStorage.clear();
      localStorage.setItem('interval-id', interval);
    }

    if (timerOn) {
      clearInterval(localStorage.getItem('interval-id'));
    }
    setTimerOn(!timerOn)
  }

  const resetTime = () => {
    setDisplayTime(25 * 60);
    setBreakTime(5 * 60);
    setWorkTime(25 * 60)
  }


  return (
    <section className="container-fluid secPomodoro">
      <article>
        <h1 className="titlePomodoro">Técnica Pomodoro</h1>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <WorkTime
              title={"Tiempo de Trabajo"}
              changeTime={changeTime}
              type={"Trabajo"}
              time={workTime}
              formatTime={formatTime} />
          </div>
          <div className="col-sm-12 col-md-6">
            <BreakTime
              title={"Tiempo de Descanso"}
              changeTime={changeTime}
              type={"Descanso"}
              time={breakTime}
              formatTime={formatTime} />
          </div>
        </div>

        <div className="container-fluid">
          <div className="container-fluid">
            <h3 className="textState mt-3">{onBreak ? "Descanso" : "Trabajo"}</h3>
            <h1 className="time2">{formatTime(displayTime)}</h1>
          </div>

          <div className="container-fluid">
            <div className="buttonsTime">
              <button className="btnPlay" onClick={controlTime}>
                {
                  timerOn 
                  ? 
                    (
                      <h3><FontAwesomeIcon icon={faPauseCircle} /> Pausar</h3>
                    )
                  : 
                    (
                      <h3><FontAwesomeIcon icon={faPlayCircle} /> Play</h3>
                    )
                }
              </button>
              <button className="btnReset" onClick={resetTime}>
                <h3>Reiniciar</h3>
              </button>
            </div>
          </div>
          <AlarmMessage />
        </div>
      </article>
    </section>
  )
}