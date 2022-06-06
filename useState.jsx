import { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {

  function clickmefunc() {
    setCounter(200);
  }

  function clickmefn() {
    setCounter(300);
  }

  const [counter, setCounter] = useState(100)

  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={clickmefunc}>Click Me</button>
      <button onClick={clickmefn}>Click</button>
    </div>
  );
}
export default App;
