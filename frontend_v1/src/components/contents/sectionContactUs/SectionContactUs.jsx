import React from 'react'
import logo from './../../../images/logo_name.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs(props) {
    return (
        <section className="sectionContactUs">
            <h2 className="titleContactUs">Contáctanos</h2>
            <p className="pContactUs">Cuéntanos tus dudas, preguntas o recomendaciones sobre ProcrastinApp.</p>
            <div className="chatbox card">
                <div className="card-header chatHeader">
                    <img src={logo} className="img-fluid logo" alt="Logo ProcrastinApp" loading="lazy" id="nameLogo" />
                </div>
                <div className="card-body">

                </div>

                <div className="card-footer chatArea">
                    <textarea className="textarea" cols="30" rows="1"></textarea>
                    <div className="btn-send">
                        <FontAwesomeIcon className="iconSend" icon={faPaperPlane} />
                    </div>
                </div>
            </div>
        </section>
    )
}