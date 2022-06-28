//import logo from './logo.svg';
import './App.css';
import PizzaComponent from './components/PizzaComponent/PizzaComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PizzaComponent name="Kolbaszos rajas" price="1500"/>
        <p>
          Szevasz tavasz
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
