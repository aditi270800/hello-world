import { useState } from 'react';
import './App.css';
import Header from './components/Header';

const quotes = [
  'hello',
  'bye',
  'good',
  'think'
];

function App() {

  function randomizequote() {
    const randomquote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomquote)
  }
  const [quote, setQuote] = useState(quotes[0])

  return (
    <div>
      <div>{quote}</div>
      <button onClick={randomizequote}>Click me</button>
    </div>
  );
}
export default App;