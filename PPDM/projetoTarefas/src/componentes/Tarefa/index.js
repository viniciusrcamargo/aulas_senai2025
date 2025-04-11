import {View, Image, Text, StyleSheet } from 'react-native';
import tarefas from '../../mocks/Tarefas';

export default function Tarefa(){
    const renderizaItem = ({ item }) => (
       <View>
            <View>
                <Image source={item.imagem} />
                <Text>{item.nome}</Text>
            </View>
       </View> 
    );

    return(
        //
    );
}