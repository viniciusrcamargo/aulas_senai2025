import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Tema} from '../../tema';


export default function Notificacao(){
    return(
        <View style={estilos.container}>
            <StatusBar barStyle="light-content"/>
            <Text style={estilos.titulo}>Notificações</Text>
            <Text style={estilos.subtitulo}>Noticação nova por aqui</Text>
        </View>
    )
}
const estilos = StyleSheet.create({
    container:{
        backgroundColor: Tema.colors.background,
        alignItems:  'center',
        justifyContent: 'center',
        padding: 20
    },
    titulo:{
        fontSize: Tema.fontSizes.title,
        color: Tema.colors.textSecondary
    }, 
    subtitulo:{
        fontSize: Tema.fontSizes.subtitle,
        color: Tema.colors.textSecondary
    }
})
