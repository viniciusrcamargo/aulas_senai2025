import { useState } from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet,  Switch} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function DescansoLongo() {
    const [ativo, setAtivo] = useState(false);
    const toggleTroca = () => setAtivo(prevState => !prevState);

    const mudaStatus = () => {
        setIsOn(!isOn);
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.tituloSemNegrito}>Otimize sua produtividade,</Text>
            <Text style={estilos.tituloComNegrito}>mergulhe no que importa</Text>
            <Image source={require('../../../assets/images/foco.png')} style={estilos.imagem} />
            <View style={estilos.quadrado}>
                <View style={estilos.navegacao}>
                    <View style={estilos.foco}>
                        <Text style={estilos.textoFoco}>Foco</Text>
                    </View>
                    <Text style={estilos.textoMenu}>Descanso curto</Text>
                    <Text style={estilos.textoMenu}>Descanso longo</Text>
                </View>
                <Text style={estilos.textoRelogio}>25:00</Text>
                <View style={estilos.botaoMusica}>
                    <Switch
                        trackColor={{ false: '#000', true: '#B872FF' }}
                        thumbColor={{ false: '#000', true: '#B872FF' }}
                        onValueChange={toggleTroca}
                        value={ativo}
                        style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
                    />
                    <Text style={estilos.textoMusica}>Música</Text>
                </View>
                <TouchableOpacity style={estilos.button}>
                    <AntDesign name="caretright" size={24} color="white" />
                    <Text style={estilos.buttonText}>Começar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        fontFamily: 'Roboto',
        alignItems: 'center',
        flex: 1,
        textAlign: 'center',
        marginTop: 20
    },
    tituloSemNegrito: {
        fontSize: 30,
        color: 'white',
        width: '70%',
        fontWeight: '100'
    },
    tituloComNegrito: {
        fontSize: 35,
        color: 'white',
        width: '70%',
        fontWeight: '900'
    },
    imagem: {
        width: 300,
        height: 300,
        marginTop: 30
    },
    quadrado: {
        backgroundColor: 'rgba(20,68,128,0.90)',
        width: '80%',
        marginTop: 30,
        borderColor: 'rgba(18,99,209,0.90)',
        borderRadius: 20,
        borderWidth: 1,
        alignItems: 'center',
        height: 260
    },
    navegacao: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15
    },
    textoMenu: {
        marginRight: 20,
        marginTop: 7,
        color: 'white'
    },
    textoFoco: {
        backgroundColor: 'rgba(17,98,198,0.9)',
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
    },
    foco: {
        backgroundColor: 'rgba(17,98,198,0.9)',
        borderRadius: 10,
        marginRight: 10,
        color: 'white',
        padding: 8,
        textAlign: 'center'
    },
    textoRelogio:{
        color: 'white',
        fontSize: 60,
        fontWeight: '900'
    },
    button:{
        backgroundColor: '#B872FF',
        borderRadius: 32,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 7,
        width: '60%'
    },
    buttonText:{
        textAlign: 'center',
        color: '#fff',
        fontSize: 18
    },
    botaoMusica:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 12
    },
    textoMusica:{
        color: 'white',
        marginLeft: 40
    }
})