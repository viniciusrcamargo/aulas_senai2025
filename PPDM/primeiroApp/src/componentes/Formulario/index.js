import { View, Image, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import Dino from '../../../assets/img/big-neck.png'



export default function Formulario(){
    return(
        <View style={estilos.container}>
            <Image source={Dino} style={estilos.dino}/>
            <Text style={estilos.titulo}>Big Neck's System</Text>

            <View style={estilos.campoTexto}>
                <Text style={estilos.label}>Nome</Text>
                <TextInput  style={estilos.input}/>
            </View>

            <View style={estilos.campoTexto}>
                <Text style={estilos.label}>E-mail</Text>
                <TextInput  style={estilos.input}/>
            </View>

            <View style={estilos.campoTexto}>
                <Text style={estilos.label}>Telefone</Text>
                <TextInput  style={estilos.input}/>
            </View>

            <View style={estilos.campoTexto}>
                <Text style={estilos.label}>RA</Text>
                <TextInput  style={estilos.input}/>
            </View>
     

            <Pressable style={estilos.botao}>
                <Text style={estilos.textoBotao}>Cadastrar</Text>
            </Pressable>
        </View>
    );
}

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dino:{
        width: '150px',
        height: 150
    },
    titulo:{
        fontSize: 30,
        marginBottom: 20
    },
    input:{
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        width: 250,
        height: 40,
        padding: 10,
        marginTop: 10
    },
    campoTexto:{
       width: '100%',
       alignItems: 'center',
       marginBottom: 10 
    },
    label:{
        fontSize: 20,
        marginBottom: 5
    },
    botao:{
        marginTop: 20,
        width: 260,
        height: 50,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    textoBotao:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})