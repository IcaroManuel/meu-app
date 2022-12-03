import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">

      < HelloWorld />
      <SayMyName nome="Icaro" />
      <Pessoa nome="Icaro" idade="17" profissao="programador"  foto='https://via.placeholder.com/150  ' />
    </div>
  );
}

export default App;