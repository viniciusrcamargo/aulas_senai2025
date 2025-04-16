import { View, Image, Text, FlatList, StyleSheet} from 'react-native';
import tarefas from '../../mocks/Tarefas';


export default function Lista(){
    const renderizarItem = ({item}) => (
        <View style={estilos.item}>
            <View style={estilos.tituloImagem}>
                <Image source={item.imagem} style={estilos.imagem}/>
                <Text style={estilos.titulo}>{item.nome}</Text>
            </View>
            <Text style={estilos.info}>{item.descricao}</Text>
        </View>
    );

    return(
        <View >
            <FlatList
                data={tarefas}
                renderItem={renderizarItem}
                keyExtractor={item => item.id}
                style={{ width: '100%' }} // Garante que a lista ocupe a largura do container
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    container:{
        // flex: 1,
        backgroundColor: '#fff',
        // padding: 20,
        marginTop: 20,
        // maxWidth: 600, // Limita a largura máxima na web para melhor leitura
        // alignSelf: 'center', // Centraliza o container horizontalmente em telas maiores
    },
    item:{
        backgroundColor: '#9BF2EA',
        padding: 15,
        // marginLeft: 0,
        borderRadius: 10,
        margin: 8
    },
    titulo:{
        fontSize: 18, // Ajustei o tamanho da fonte para web
        marginLeft: 10,
    },
    tituloImagem:{
        flexDirection: 'row',
        alignItems: 'center', // Alinha verticalmente a imagem e o texto
    },
    info:{
        fontSize: 14, // Ajustei o tamanho da fonte para web
        marginTop: 5,
    },
    imagem:{
        width: 30, // Ajustei o tamanho da imagem para web
        height: 30,
    }
});