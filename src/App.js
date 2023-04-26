import './App.css';
import Heading from './components/Heading';
import Counter from './Counter';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading text='Aplikacja Licznika w ReactJS' classValue='orange'/>
      </header>
      <Counter counterInitValue={0}/>
    </div>
  );
}

export default App;
