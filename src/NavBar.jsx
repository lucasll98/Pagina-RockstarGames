import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

function NavBar() {
  return (<>
    <div className='nav1'>
        <h2>MIRA YA EL TRÁILER DE GRAND THEFT AUTO VI</h2>
    </div>
    <nav>

        <div className='iconoR'></div>

        <div className="contenedorItemsNav1">
            <a href="">Juegos</a>
            <a href="">Newswire</a>
            <a href="">Videos</a>
            <a href="">Descargas</a>
            <a href="">Store</a>
            <a href="">Asistencia técnica</a>
        </div>

        <div className="contenedorItemsNav2">
            <div className='launcher'>OBTENER LAUNCHER</div>
            <FiSearch className='icono1'/>
            <div className='contenedorUser'><FiUser className='icono2' /></div>
        </div>
    </nav>
    </>
  )
}

export default NavBar