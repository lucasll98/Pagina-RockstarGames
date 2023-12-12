import React from 'react'
import Juegos from './Juegos.jsx'

function SeccionJuegos() {
  return (
    <section className='contenedorNews'>
        <h2 className='tituloNewswire'>Juegos destacados</h2>
        <div className='subcontenedorNews'>
            <Juegos imagen={"src/assets/gtav.jpg"}/>
            <Juegos imagen={"src/assets/gtasa.jpg"}/>
            <Juegos imagen={"src/assets/gtaiv.jpg"}/>
            <Juegos imagen={"src/assets/red2.jpg"}/>
        </div>
        <div className='viewMore'>View More</div>
    </section>
  )
}

export default SeccionJuegos