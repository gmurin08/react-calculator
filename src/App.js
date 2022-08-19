import './App.css';
import Button from './components/buttons/Button';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      {/*<Button isMod={true}>0</Button>*/}
      <Calculator></Calculator>
    </div>
  );
}

export default App;
