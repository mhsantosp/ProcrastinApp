import React from 'react'
import Checklist from './Checklist'
import ButtonsChecklist from './ButtonsChecklist'
import Character from './Character'

export default function SectionChecklist(props){
    return(
    <section className="row">
        <article className="col-6">
            <Checklist/>
            <ButtonsChecklist/>
        </article>
        <article className="col-6 characterSC">
            <Character/>
        </article>
    </section>

    )
}