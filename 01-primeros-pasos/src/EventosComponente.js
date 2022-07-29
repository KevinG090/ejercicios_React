import React from 'react'

export const EventosComponente = () => {

    let numeroClicks = 0 ;

    const click = (e, Nombre) => {
        alert(`has dado click `+(numeroClicks +=1) + " " + Nombre)
    }
    const doubleClick = (e, Nombre) => {
        alert(`has dado doble click ` + Nombre)
    }
    const entrarSalir = (e,accion) => {
        console.log(`has ${accion} de la caja`)
    }
    const estasDentro = e => {
        console.log("Estas dentro del input");
    }
    const estasFuera = e => {
        console.log("Estas estas Fuera del input");
    }

  return (
    <div className='EventosComponente'>
        <h1>Eventos en React</h1>
        
        {/* se llama a x funcion al darle click(s) (Es un Evento) */}
        <button onClick={e => click(e, "Kevins")}>Un Click</button>
        <button onDoubleClick={e => doubleClick(e, "Kevins")}>Dos Click</button>
        
        <hr/>
        <div id='caja' 
            onMouseEnter={e => entrarSalir(e,"Entrado")} // Evento al entrar
            onMouseLeave={e => entrarSalir(e,"Salido")}// Evento al salir
        >
            <p>Caja</p>
        </div>
        <p>
            <input  type="text" 
                    onFocus={ estasDentro } // cuando esta sobre el elemento
                    onBlur={ estasFuera } // cuando no esta sobre el elemento
                    placeholder="Introduce algo..."/>
        </p>
    </div>
  )
}
