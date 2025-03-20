import { createContext, useState } from "react";
import fotos from "../fotos.js";


const ContextoImagem = createContext();

const ProvedorImagem = ({children}) =>{
    const [imagens, setImagens] = useState(fotos);

    return(
        <ContextoImagem.Provider value={{imagens, setImagens}}>
            {children}
        </ContextoImagem.Provider>
    );
}

export {ContextoImagem, ProvedorImagem};