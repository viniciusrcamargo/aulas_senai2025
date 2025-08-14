import { FlatList } from "react-native"
import Galeria from '../galeria'

export default function Lista({fotos}){
    return(
        <FlatList 
            data={fotos} 
            renderItem={({item}) => (
                <Galeria 
                    titulo = {item.titulo}
                    descricao = {item.descricao}
                    imagem = {item.imagem}
                />
            )}
            keyExtractor={(item) => item.id.toString()}
        />
    )
}