import React/*, { useState, useEffect }*/ from 'react'
import Checklist from './Checklist'
// import Character from './Character'
// import axios from 'axios'

export default function SectionChecklist(props) {

  return (
    <section className="container-fluid tareas">
      <article className="row">
        <div className="col-sm-12 col-md-12 py-3">
          <Checklist/>
        </div>
      </article>
    </section>
  )
}