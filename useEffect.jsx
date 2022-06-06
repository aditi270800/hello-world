import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';


function App() {

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('Aditi' , counter);
  },[counter])

  function increase() {
    setCounter(oldervalue => oldervalue+1)
  }

  function decrease() {
    setCounter(oldervalue => oldervalue-1)
  }

  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={increase}>increased</button>
      <button onClick={decrease}>decreased</button>
    </div>
  );
}
export default App;