import React from 'react'
import '../assets/css/technologies.css'
import ProgressBar from './progress_bar';

export default function Technologies() {
  return (
    <div className='technologies'>
            <h2 className='title'>Tecnologias</h2>
            <center><h2 className='type'>Desarrollo</h2></center>
            <ul>
                <h3>C++</h3>
                <ProgressBar percentage={60}/>
            </ul>
            <ul>
                <h3>html</h3>
                <ProgressBar percentage={70}/>
            </ul>
            <ul>
                <h3>JavaScript</h3>
                <ProgressBar percentage={80}/>
            </ul>
            <ul>
                <h3>Python</h3>
                <ProgressBar percentage={85}/>
            </ul>
            <ul>
                <h3>Flutter</h3>
                <ProgressBar percentage={80}/>
            </ul>
            <center><h2 className='type'>QA</h2></center>
            <ul>
                <h3>Cucumber + Gherkin  + Java</h3>
                <ProgressBar percentage={90}/>
            </ul>
            <ul>
                <h3>Kathalon Studio</h3>
                <ProgressBar percentage={90}/>
            </ul>
             <ul>
                <h3>Trello</h3>
                <ProgressBar percentage={80}/>
            </ul>
            <ul>
                <h3>Selenium IDE</h3>
                <ProgressBar percentage={69}/>
            </ul>
            <ul>
                <h3>Cypress</h3>
                <ProgressBar percentage={60}/>
            </ul>
        </div>
  )
}
