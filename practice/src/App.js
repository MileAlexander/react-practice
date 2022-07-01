import './App.css';
//import Timer from './components/Timer';
import Timer2 from './components/Timer2';
import { useState } from 'react';

function App() {
  const [showTimer, setShowTimer] = useState(true);
  // const state = useState(true);
  // const shoeTimer = state[0];
  // const setShowTimer = state[1];

  return (
    <div className="App">
      <header className="App-header">
        {showTimer ? <Timer2 /> : <div>No timer</div>}
        <button onClick={()=>{setShowTimer(false)}}>Hide timer</button>
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
};

export default App;
