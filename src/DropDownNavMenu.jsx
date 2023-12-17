import React from 'react'
import Jueguitos from './Jueguitos.jsx'
import { FaArrowRight } from "react-icons/fa";


function DropDownNavMenu() {
  return (
    <div className="contenedorDropdown">
      <section className='contenedorNews'>
        <div className="subContDrop">
            <h2 className='tituloDrop'>Juegos destacados</h2>
            <a  className='subtDrop' href="">VER TODOS <FaArrowRight /></a>
        </div>
          <div className='subcontenedorNews'>
              <Jueguitos  imagen={"src/assets/gtav.jpg"}/>
              <Jueguitos  imagen={"src/assets/gtasa.jpg"}/>
              <Jueguitos  imagen={"src/assets/gtaiv.jpg"}/>
              <Jueguitos  imagen={"src/assets/red2.jpg"}/>
              <Jueguitos  imagen={"src/assets/gtavc.jpg"}/>
          </div>
      </section>
    </div>
  )
}

export default DropDownNavMenu