import "../assets/css/body.css";
import College from './college.jsx'
import Work from "./work.jsx";
import SoftSkill from "./soft_skill.jsx";
import Technologies from "./technologies.jsx";

import React from 'react'

export default function Body() {
  return (
    <div>
      <College/>
      <Work/>
      <SoftSkill/>
      <Technologies/>
    </div>

  )
}
