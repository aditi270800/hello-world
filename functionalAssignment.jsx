import { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {

    const [counter, setCounter] = useState(100)

    function clickmefunc() {
        setCounter(oldervalue => oldervalue+1);
    }

    function clickmefn() {
        setCounter(oldervalue => oldervalue+1);
    }

  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={clickmefunc}>Increased</button>
      <button onClick={clickmefn}>Decreased</button>
    </div>
  );
}
export default App;
