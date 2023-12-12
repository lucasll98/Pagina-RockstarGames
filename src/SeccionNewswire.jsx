import React from 'react'
import News from './News.jsx'

function SeccionNewswire() {
  return (
    <section className='contenedorNews'>
        <h2 className='tituloNewswire'>Newswire</h2>
        <div className='subcontenedorNews'>
            <News imagen={"src/assets/gtavi.jpg"} p1="Rockstar Games" p2="GTA VI" titulo="Grand Theft Auto VI ya disponible en PS5 y XBOX ONE SERIES. Juega ya!"/>
            <News imagen={"src/assets/trilogy.png"} p1="Rockstar Games" p2= "GTA The Trilogy" titulo="Nuevo parche para fixear errores en GTA The Trilogy. Actualiza tu juego."/>
            <News imagen={"src/assets/festive.png"} p1="Rockstar Games" p2= "GTA Online" titulo="Ya está disponible la actualizacion de navidad Festive Surprise 2023. Felices fiestas!"/>
            <News imagen={"src/assets/rdronline.png"} p1="Rockstar Games" p2= "Red Dead Online" titulo="Nueva actualización de Red Dead Online: Blood Money. Actualiza tu juego y roba los mejores bancos!"/>
            <News imagen={"src/assets/shop.png"} p1="Rockstar Games" p2= "" titulo="Merchandising Oficial de Rockstar Games"/>
            <News imagen={"src/assets/drugwars.png"} p1="Rockstar Games" p2= "GTA Online" titulo="Nuevo DLC gratuito para GTA Online Drug Wars ya disponible!"/>
        </div>
        <div className='viewMore'>View More</div>
    </section>
  )
}

export default SeccionNewswire