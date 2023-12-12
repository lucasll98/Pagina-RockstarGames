import React from 'react'

function News({imagen,p1,p2,titulo}) {
  return (
    <div className='news'>
        <img className='newsImagen'src={imagen}/>
            <div className="contNewsItems">
              <div className="contP">
                <p className='p1'>{p1}</p>
                <p className='p2'>{p2}</p>
              </div> 
                <h3 className='newsSubt'>{titulo}</h3>
            </div>  
    </div>
  )
}

export default News