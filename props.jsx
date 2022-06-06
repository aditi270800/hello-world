import './App.css';
import Header from './components/Header';

function props() {
  return (
    <div>
      <Header name="Aditi" greeting="BYE"/>
      <p>Hello there{3+3}</p>
    </div>
  );
}
export default props;