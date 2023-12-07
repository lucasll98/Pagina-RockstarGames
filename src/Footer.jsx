import React from 'react'
import { FaTwitch } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


function Footer() {
  return (
    <footer>
        <div className="contenedorFooter1">
            <div>
                <a href="" className='itemFooter'>Contact</a>
                <a href="" className='itemFooter'>Empleo</a>
                <a href="" className='itemFooter'>Suscríbete</a>
            </div>
            <div><strong>Selecciona un idioma</strong></div>
        </div>

        <div className="contenedorFooter2">
            <div>
                <a href="" className='itemFooter2'>Corporación</a>
                <a href="" className='itemFooter2'>Privacidad</a>
                <a href="" className='itemFooter2'>Cookie Settings</a>
                <a href="" className='itemFooter2'>Política de cookies Rockstar Games</a>
                <a href="" className='itemFooter2'>Aviso legal</a>
                <a href="" className='itemFooter2'>Uso de datos</a>
            </div>

            <div>
                <FaTwitch className='iconosRedes'></FaTwitch>
                <FaInstagram className='iconosRedes'></FaInstagram>
                <FaXTwitter className='iconosRedes'></FaXTwitter>
                <FaYoutube className='iconosRedes'></FaYoutube>
                <FaFacebookF className='iconosRedes'></FaFacebookF>
            </div>
        </div>

        <div className="contenedorFooter3">
            <p><strong>Rockstar Games</strong></p>
            <p><strong>New York  London  Paris  Bogotá</strong></p>
            <p><strong>MCMXCVIII</strong></p>
        </div>
    </footer>
  )
}

export default Footer