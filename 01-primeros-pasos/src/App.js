import logo from './logo.svg';
import './App.css';
import Element from './Element';
import SegundoComponente from './SegundoComponente';
import {TercerComponente} from './TercerComponente';
import {EventosComponente} from './EventosComponente';

function App() {

  const Notas = {
    mate : "5.0",
    ingles : "4.5",
    castell : "3.2"
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Que se dice perros  
        </p>
        <div>
          <hr/>
          <Element />
          <hr/>
          <SegundoComponente />
          <hr/>
          <TercerComponente 
            // nombre = "Kevin"
            // apellido = "Guevara"
            edad = "18 años"
            materias = {Notas} 
          />
          <hr/>
          <EventosComponente/>
        </div>
      </header>
    </div>
  );
}

export default App;
