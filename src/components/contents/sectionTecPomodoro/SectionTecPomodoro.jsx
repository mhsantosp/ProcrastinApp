import React from 'react'
import BreakTime from './BreakTime'
import WorkTime from './WorkTime'
import AlarmMessage from './AlarmMessage'
import Chronometer from './Chronometer'

export default function SectionTecPomodoro(props){
    return(
        <section className="secPomodoro">
            <h1 className="titlePomodoro pt-4">Técnica Pomodoro</h1>
            <div className="row mt-5">
                <div className="col-6 ml-5">
                    <WorkTime/>
                </div>
                <div className="col-6">
                    <BreakTime />
                </div>
                
            </div>
            <div>
                <Chronometer/>
                <AlarmMessage/>
            </div>
        </section>
    )
}