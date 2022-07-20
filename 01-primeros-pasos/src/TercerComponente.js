import React from 'react'

const TercerComponente = (props) => {
  return (
    <div className='tercerComponente'>
        <h2>Comunicacion entre componente</h2>
        <ul>
            <li className='li' >nombre : {props.nombre}</li>
            <li className='li' >apellido : {props.apellido}</li>
            <li className='li' >edad : {props.edad}</li>
            <li className='li' >matematicas : {props.materias.mate}</li>
        </ul>
    </div>
  )
}

export default TercerComponente; 