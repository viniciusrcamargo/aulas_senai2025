import {View, Text, StyleSheet} from 'react-native'

export default function TopoEstudos({titulo}){
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>{titulo}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        backgroundColor: '#3498db',
        paddingVertical:15,
        width: '100vw',
    }, titulo:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 'auto'

    }
})