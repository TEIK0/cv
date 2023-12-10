import React from 'react'
import "../assets/css/work.css";

export default function Work() {
  return (
    <div className='experience_container'>
      <h2 className='experience'>Experiencia Laboral</h2>
      <ul className="experience-list">
        <center>
            <li className="experience-item">
            <h3>Nolatech</h3>
            <p>Cargo: Becario flutter</p>
            <p>Fecha: febrero 2023 - Agosto 2023</p>
            </li>
        </center>
        <center>
            <li className="experience-item">
            <h3>Nolatech</h3>
            <p>Cargo: Becario QA automatizado</p>
            <p>Fecha: Septiempre 2023 - Actualidad</p>
            </li>
        </center>
      </ul>
    </div>
  )
}
