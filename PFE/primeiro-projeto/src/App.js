import './App.css';
import foto from './imagem/woman.png'

const estilo = {
  paragrafo: {color: 'red'}
}

function App() {
  return (
    //fragmento
    <> 
      <h1>Meu projeto React</h1>
      <p style={estilo.paragrafo}>Estou aprendendo React</p>
      <p className='paragrafo'>Estou aprendendo React</p>
      <img src={foto}></img>
    </>
   
  );
}

export default App;
