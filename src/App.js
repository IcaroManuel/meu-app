import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase  from './components/Frase';

function App() {
  return (
    <div className="App">
      <h1> Testando Css   </h1>      
      < Frase/>
      <SayMyName nome="Icaro" />
      <Pessoa nome="Icaro" idade="17" profissao="programador"  foto='https://via.placeholder.com/150  ' />
    </div>
  );
}

export default App;
