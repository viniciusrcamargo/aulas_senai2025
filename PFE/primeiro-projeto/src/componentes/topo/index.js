import foto from '../../imagem/woman.png';


function Topo(){
    const estilo = {
        paragrafo: {color: 'red'}
      }
      
    return(
        <>
            <h1>Meu projeto React</h1>
            <p style={estilo.paragrafo}>Estou aprendendo React</p>
            <p className='paragrafo'>Estou aprendendo React</p>
            <img src={foto}></img>
        </>
    )
}

export default Topo;