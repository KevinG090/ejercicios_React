import React from "react";
import './App.css';

const Element = () =>{

    let nombre = "Kevin";
    let edad = 18 ;
    let web =" www.kevin090.com";

    return (
        <div>
            <h2>esto es un ejemplo de variables</h2>
            <ul className="lista">
                <li className="li">Nombre : {nombre}</li>
                <li className="li">Edad : {edad}</li>
                <li className="li">Web : {web}</li>
            </ul> 
        </div>

    )
}
export default Element;