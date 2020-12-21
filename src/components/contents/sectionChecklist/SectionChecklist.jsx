import React from 'react'
import Checklist from './Checklist'
import ButtonNewTask from './ButtonNewTask'
import Character from './Character'

export default function SectionChecklist(props){
    return(
    <section className="row">
        <article className="col-6">
            <Checklist/>
            <ButtonNewTask/>
        </article>
        <article className="col-6 characterSC">
            <Character/>
        </article>
    </section>

    )
}