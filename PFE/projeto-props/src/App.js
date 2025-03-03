import Produto from  './componentes/Produto';

function App() {
  const produtos = [
    { id: 1, nome: 'Notebook', preco: 3500},
    { id: 2, nome: 'Havaiana Azul', preco: 45},
    { id: 3, nome: 'Marmita', preco: 22}
  ]
  return (
    <div>
      <h1>Lista de Produtos</h1>
      {
        produtos.map((produto) =>(
          <Produto  nome={produto.nome} preco={produto.preco}/>
        ))
      }
    </div>
  );
}

export default App;
