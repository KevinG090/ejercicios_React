import logo from './logo.svg';
import './App.css';
import Element from './Element';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Que se dice perros  
        </p>
        {/* Primer componente */}
        <Element />
      </header>
    </div>
  );
}

export default App;
