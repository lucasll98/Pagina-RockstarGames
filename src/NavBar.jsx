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
            <a href="" className='itemNav'>Juegos</a>
            <a href="" className='itemNav'>Newswire</a>
            <a href="" className='itemNav'>Videos</a>
            <a href="" className='itemNav'>Descargas</a>
            <a href="" className='itemNav'>Store</a>
            <a href="" className='itemNav'>Asistencia técnica</a>
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