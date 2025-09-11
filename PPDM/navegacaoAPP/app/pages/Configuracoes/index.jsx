import {View, Text, StyleSheet} from 'react-native';
import {Tema} from '../../tema';


export default function Configuracao(){
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Configurações</Text>
            <Text style={estilos.subtitulo}>Encontre suas configs Aqui</Text>
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
