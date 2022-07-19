import React from 'react';

const SegundoComponente = () => {
    const libros = ["Shambala","Carpintero","Vampiro","Mundo de sofia"];
    // const libros = [];
    
  return (
    <div className='SegundoComponente'>
        {libros.length >= 1 ?  //Condicional
        (<ul id='listaLibros'>
                {
                    libros.map((libro , indice) => {
                        return <li key={indice} className='li'>{libro}</li>
                    })
                }
            </ul>)
            :(<p>No hay libros</p>) 
        }
    </div>
  )
}

export default SegundoComponente;