import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import SeccionNewswire from './SeccionNewswire.jsx'
import './Estilos.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <NavBar/>
    <Header/>
    <SeccionNewswire/>
    <Footer/>
    </>
)
