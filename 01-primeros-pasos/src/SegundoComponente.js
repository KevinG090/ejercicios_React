import React from 'react';

const SegundoComponente = () => {
    const libros = ["Shambala","Carpintero","Vampiro","Mundo de sofia"];
    // const libros = [];
    
  return (
    <div className='segundoComponente'>
        {libros.length >= 1 ?  //Condicional (if)
        (<ul className='listaLibros'>
                {
                    libros.map((libro , indice) => {
                        return <li key={indice} className='li'>{libro}</li>
                    })
                }
            </ul>)
            :(<p>No hay libros</p>) // Segunda condicion (else)
        }
    </div>
  )
}

export default SegundoComponente;