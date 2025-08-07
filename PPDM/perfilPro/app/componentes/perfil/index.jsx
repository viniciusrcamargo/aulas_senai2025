import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { ScrollView, View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";



export default function Perfil() {
    return (
        <ScrollView style={estilos.container} contentContainerStyle={estilos.conteudo}>
            <View style={estilos.cabecalhoPerfil}>
                <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                    style={estilos.avatar}
                />
                <Text style={estilos.nome}>Erik Silva Ando</Text>
                <Text style={estilos.profissao}>Desenvolvedor React Native</Text>
            </View>

            <View>
                <MaterialIcons name="location-on" size={24} color="#1976D2" />
                <Text>Rua 25 de Março, 1000, Mirandópolis - SP</Text>
            </View>

            <TouchableOpacity>
                <MaterialIcons name="phone" size={24} color="#1976D2" />
                <Text>+55 18 997779090</Text>
            </TouchableOpacity>

            <View>
                <MaterialCommunityIcons name="briefcase-outline" size={24} color="#1976D2" />
                <Text>Experiências</Text>
            </View>

            <View>
                <Text>Desenvolvedor React</Text>
                <Text>Empresa - Amazon (2022-Atual)</Text>
                <Text>Desenvolvi a tela de 404 do app da Amazon.</Text>
            </View>
            <View>
                <Text>Estagiário de T.I.</Text>
                <Text>Senai (2024-Atual)</Text>
                <Text>Ajudei a criar o Kimber e a varrer a sala.</Text>
            </View>

            <View>
                <FontAwesome5 name="book-open" size={22} color="#1976D2" />
                <Text>Cursos</Text>
            </View>

            <View>
                <Text>React Native no Senai</Text>
                <Text>2025 - O melhor curso que fiz</Text>
            </View>
            <View>
                <Text>Back end com Raphael</Text>
                <Text>2025 - Mais ou menos</Text>
            </View>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
    },
    conteudo:{
        padding: 20,
        paddingBottom: 40
    },
    cabecalhoPerfil:{
        alignItems: 'center',
        marginBottom: 24,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: '0.08',
        shadowRadius: 8,
        textShadowOffset: {width: 0, height: 2}
    },
    avatar:{
        width: 96,
        height: 96,
        borderRadius: 48,
        marginBottom: 12,
        borderWidth: 3,
        borderColor: '#1976D2'
    },
    nome:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#222'
    },
    profissao: {
        fontSize: 16,
        color: '#1976D2',
        marginTop: 4,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        elevation: 1,
    },
    icon: {
        marginRight: 12,
    },
    sectionText: {
        fontSize: 16,
        color: '#444',
    },
    secaoTitulo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 8,
    },
    secaoTituloText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1976D2',
        marginLeft: 8,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        elevation: 1,
    },
    tituloCard: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
    },
    subtituloCard: {
        fontSize: 14,
        color: '#1976D2',
        marginBottom: 4,
    },
    cardTexto: {
        fontSize: 14,
        color: '#555',
    },
})