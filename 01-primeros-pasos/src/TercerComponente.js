import React from 'react';
import PropTypes from 'prop-types';

export const TercerComponente = ({nombre,apellido,edad,materias}) => { //Props
  return (
    <div className='tercerComponente'>
        <h2>Comunicacion entre componente</h2>
        <ul className='listaLibros'>
            <li className='li' >nombre : {nombre}</li>
            <li className='li' >apellido : {apellido}</li>
            <li className='li' >edad : {edad}</li>
            <li className='li' >matematicas : {materias.mate}</li>
            <li className='li' >ingles : {materias.ingles}</li>
        </ul>
    </div>
  )
}

TercerComponente.propTypes = { // verifica el tipo de datos (PropTypes)
    nombre : PropTypes.string.isRequired,
    apellido : PropTypes.string,
    edad : PropTypes.string,
    materias : PropTypes.object
}

TercerComponente.defaultProps = {//Estos estaran por defecto en caso que no lleguen los props 
  nombre : "Juan",
  apellido : "Manosalva"
}
