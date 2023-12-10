import React from 'react'
import '../assets/css/college.css'

export default function College() {
  return (
    <div className="mayor">
        <h2 className='education'>Educación</h2>
        <ul>
          <h3 className="education_level">Educación primaria</h3>
          <center><h2 className="education_name">
            Unidad Educativa Colegio “San Agustín” 
          </h2></center>
        </ul>
        <ul>
          <h3 className="education_level">Educación secundaria</h3>
          <center><h2 className="education_name">
          Unidad Educativa Colegio Mario Lezama Esquivel
          </h2></center>
        </ul>
        <ul>
          <h3 className="education_level">Educación universitaria</h3>
          <h3 className="mayor_name">INGENIERÍA INFORMÁTICA</h3>
          <center><h2 className="collegue_name">
            Universidad Nacional Experimental de Guayana
          </h2></center>
          <center><h3 className="period">2019 - Actualidad</h3></center>
        </ul>
     </div>
  )
}
