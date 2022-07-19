import logo from './logo.svg';
import './App.css';
import Element from './Element';
import SegundoComponente from './SegundoComponente';

function App() {
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
        </div>
      </header>
    </div>
  );
}

export default App;
