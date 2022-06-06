import './App.css';
import Header from './components/Header';

function clickmefunc() {
  console.log("I was pressesd")
}

function App() {
  return (
    <div>
      <Header name="Aditi" greeting="BYE"/>
      <p>Hello there{3+3}</p>
      <button onClick={clickmefunc}>Click Me</button>
    </div>
  );
}
export default App;
