import { Text, View, Image, StyleSheet } from "react-native"

export default function Galeria({imagem, titulo, descricao}){
    return(
        <View style={estilos.card}>
            <Image source={imagem} style={estilos.imagem}></Image>
            <View style={estilos.cardConteudo}>
                <Text style={estilos.titulo}>{titulo}</Text>
                <Text style={estilos.descricao}>{descricao}</Text>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    card:{
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 2},
        overflow: 'hidden'
    },
    imagem:{
        width: '100%',
        height: 180,
        backgroundColor: '#E3E3E3'
    },
    cardConteudo:{
        padding: 16
    },
    descricao:{
        fontSize: 14,
        color: '#757575'
    },
    titulo:{
        fontSize: 18,
        color: '#212121',
        fontWeight: '600',
        marginBottom: 6
    }
})