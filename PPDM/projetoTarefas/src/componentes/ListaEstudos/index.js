import {View, Text, FlatList, StyleSheet} from 'react-native';



export default function ListaEstudos(){
const dados = [
    {
        id: 1,
        titulo: 'Programação Backend',
        descricao: 'Programando uma API'
    },
    {
        id: 2,
        titulo: 'Programação Frontend',
        descricao: 'Programando telas incríveis'
    },
    {
        id: 3,
        titulo: 'Programação Brainstorm',
        descricao: 'A melhor matéria de todas'
    }
]

const renderizaItem = ({item}) =>(
    <View style={estilos.item}>
        <View style={estilos.itemHeader}>
            <Text style={estilos.titulo}>{item.titulo}</Text>
        </View>
        <Text style={estilos.descricao}>{item.descricao}</Text>
    </View>
)

return (
    <FlatList 
        data={dados}
        renderItem={renderizaItem}
        keyExtractor={(item) => item.id}
        style={estilos.lista}
    />
)
}

const estilos = StyleSheet.create({
    lista:{
        flex: 1,
        padding: 16,
    },
    item: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        marginBottom: 16,
        borderRadius: 8
    },
    itemHeader:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8
    }, titulo:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    descricao:{
        fontSize: 16,
        color: '#555'
    }
});