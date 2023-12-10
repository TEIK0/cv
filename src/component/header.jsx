import "../assets/css/header.css";
import fotoPeril from '../assets/img/foto_curriculum.png'

import React from 'react'

export default function Header() {
  return (
    <header>
    <div className="header">
      <h1 className="name">Luis Ron</h1>
      <h2 className="age">21 años | Venezolano</h2>
      <center><img className="personal_pic" src={fotoPeril}/></center>
      <h3 className="personal_info">+584128638163</h3>
      <h3 className="personal_info">luisestebanron@gmail.com</h3>
    </div>
  </header>
  )
}