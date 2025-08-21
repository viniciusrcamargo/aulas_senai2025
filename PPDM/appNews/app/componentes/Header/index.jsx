import { StyleSheet, View, Text } from "react-native"


export default function Header({titulo}){
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>{titulo}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        width: '100%',
        height: 60,
        backgroundColor: '#4381f4ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo:{
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    }
});