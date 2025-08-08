import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <View style={styles.cabecalhoPerfil}>
                <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
                    style={styles.avatar}
                />
                <Text style={styles.nome}>João da Silva</Text>
                <Text style={styles.profissao}>Desenvolvedor Mobile</Text>
            </View>

            <View style={styles.section}>
                <MaterialIcons name="location-on" size={24} color="#1976D2" style={styles.icon} />
                <Text style={styles.sectionText}>Rua das Flores, 123 - São Paulo, SP</Text>
            </View>

            <TouchableOpacity
                style={styles.section}
                onPress={() => Linking.openURL('tel:+5511999999999')}
            >
                <MaterialIcons name="phone" size={24} color="#1976D2" style={styles.icon} />
                <Text style={styles.sectionText}>+55 11 99999-9999</Text>
            </TouchableOpacity>

            <View style={styles.secaoTitulo}>
                <MaterialCommunityIcons name="briefcase-outline" size={24} color="#1976D2" style={styles.icon} />
                <Text style={styles.secaoTituloText}>Experiências</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.tituloCard}>Desenvolvedor React Native</Text>
                <Text style={styles.subtituloCard}>Empresa X (2022 - Atual)</Text>
                <Text style={styles.cardTexto}>Desenvolvimento de aplicativos móveis para Android e iOS, integração com APIs REST, manutenção e evolução de projetos.</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.tituloCard}>Estagiário de TI</Text>
                <Text style={styles.subtituloCard}>Empresa Y (2021 - 2022)</Text>
                <Text style={styles.cardTexto}>Suporte técnico, automação de tarefas e desenvolvimento de scripts internos.</Text>
            </View>

            <View style={styles.secaoTitulo}>
                <FontAwesome5 name="book-open" size={22} color="#1976D2" style={styles.icon} />
                <Text style={styles.secaoTituloText}>Cursos</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.tituloCard}>React Native Avançado</Text>
                <Text style={styles.subtituloCard}>Alura - 2023</Text>
            </View>
            <View style={styles.card}>
                <Text style={styles.tituloCard}>JavaScript Moderno</Text>
                <Text style={styles.subtituloCard}>Udemy - 2022</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 1,
    },
    content: {
        padding: 20,
        paddingBottom: 40,
    },
    cabecalhoPerfil: {
        alignItems: 'center',
        marginBottom: 24,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
    },
    avatar: {
        width: 96,
        height: 96,
        borderRadius: 48,
        marginBottom: 12,
        borderWidth: 3,
        borderColor: '#1976D2',
    },
    nome: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#222',
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
});