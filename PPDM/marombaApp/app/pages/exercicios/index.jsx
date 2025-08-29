import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const treinos = [
    { id: '1', nome: 'Treino A - Peito e Tríceps', tela: 'Exercicio1' },
    { id: '2', nome: 'Treino B - Costas e Bíceps', tela: 'Exercicio1' },
    { id: '3', nome: 'Treino C - Pernas e Ombros', tela: 'Exercicio1' },
];

export default function Exercicios(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Seus Treinos</Text>
            <FlatList
                data={treinos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>{item.nome}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate(item.tela)}
                        >
                            <Text style={styles.buttonText}>Ver Exercícios</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFD700',
        marginBottom: 16,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#1E1E1E',
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#FFD700',
    },
    cardTitle: {
        fontSize: 16,
        color: '#FFFFFF',
        marginBottom: 12,
    },
    button: {
        backgroundColor: '#FFD700',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: '#121212',
        fontSize: 14,
        fontWeight: 'bold',
    },
});
