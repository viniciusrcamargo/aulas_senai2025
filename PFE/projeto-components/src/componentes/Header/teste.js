import React, { useState } from 'react';

function ComponenteFuncional() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
     <h1>Olá sou um Componente Funcional!</h1>
     <p>Cont: {contador}</p>
     <button onClick={incrementar}>Incrementar</button>    </div>
 );
}

export default ComponenteFuncional;