import './App.css';
import logo from './imagens/big-neck (2).png';
import Principal from './Principal';

function App() {
  return (
      // <>
        <div className='container'>
          <div className='big-neck'>
            <img src={logo} alt="Foto"></img>
            <h4>Big Neck's System</h4>
          </div>
          <form>
            <div className='form'>
              <label for='nome'>Nome:</label>
              <input type='text' id="nome" name="nome"/>
            </div>
            <div className='form'>
              <label for='endereco'>Endereço:</label>                
              <input type="text" id="endereco" name="endereco"/>
            </div >
            <div className='form'>
              <label for='telefone'>Telefone:</label>                
              <input type='tel' id="telefone" name="telefone" />
            </div >
            <div className='form'>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email"/>
            </div >
            <div className='form'>
              <label for="ra">RA</label>
              <input type="text" id="ra" name="ra"/>
            </div >
            <div className="form">
              <label for="nick">Nick da Steam:</label>
              <input type="text" id="nick" name="nick"/>
            </div>
            <a href={Principal} className='botao'>Cadastrar</a>
          </form >
        </div>
      // </>
  );
}

export default App;
