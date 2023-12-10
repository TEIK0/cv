import React from 'react'
import '../assets/css/soft_skill.css'
import ProgressBar from './progress_bar';

export default function SoftSkill() {
    return (
        <div className='soft_skill'>
            <h2 className='title'>Habilidades blandas</h2>
            <ul>
                <h3>Ingles</h3>
                <ProgressBar percentage={80}/>
            </ul>
            <ul>
                <h3>Facilidad para aprender</h3>
                <ProgressBar percentage={70}/>
            </ul>
            <ul>
                <h3>Capacidad de resolver problemas</h3>
                <ProgressBar percentage={90}/>
            </ul>
            <ul>
                <h3>Responsabilidad</h3>
                <ProgressBar percentage={60}/>
            </ul>
            <ul>
                <h3>Trabajo en equipo</h3>
                <ProgressBar percentage={85}/>
            </ul>
            <ul>
                <h3>Adaptaciona a nuevas tecnologias</h3>
                <ProgressBar percentage={80}/>
            </ul>
        </div>
    );
}
