import { View, Text, StyleSheet} from 'react-native';
import {Tema} from '../../tema';


export default function Detalhe({route}){
    const {itemId, itemNome} = route.params;

    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Tela de Detalhes</Text>
            <Text style={estilos.subtitulo}>Aplicativo para exemplificar Navegações</Text>
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