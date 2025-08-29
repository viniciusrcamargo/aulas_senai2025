import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import maromba from '../../../assets/images/maromba.png';


export default function HomeScreen({navigation}){
    return(
        <View style={estilos.container}>
            <Image source={maromba} style={estilos.imagem}/>
            <Text style={estilos.titulo}>Bem-vindo à Academia Senai</Text>
            <Text style={estilos.subtitulo}>Seu shape começa aqui</Text>
            <TouchableOpacity style={estilos.botao} onPress={()=> navigation.navigate('Exercicios')}>
                <Text style={estilos.textoBotao}>Nossos treinos</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },
    imagem:{
        width: '100%',
        height: 230,
        borderRadius: 12,
        marginBottom: 24
    }, 
    titulo:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFD700',
        marginBottom: 8,
        textAlign: 'center'
    },
    subtitulo:{
        fontSize: 16,
        color: '#CCCCCC',
        marginBottom: 24,
        textAlign: 'center'
    },
    botao:{
        backgroundColor: '#FFD700',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 25
    },
    textoBotao:{
        color: '#121212',
        fontSize: 16,
        fontWeight: 'bold',
    }
})
