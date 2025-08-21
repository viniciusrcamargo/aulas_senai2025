import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Linking } from 'react-native';

const Principal = () => {
    const [artigos, setArtigos] = useState([]);
    const API_KEY = ''; // substitua pela sua chave da TheNewsAPI

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const resposta = await fetch(`https://api.thenewsapi.com/v1/news/top?api_token=${API_KEY}&language=pt`);
                const dados = await resposta.json();
                setArtigos(dados.data); // os artigos vêm dentro de "data"
            } catch (erro) {
                console.error('Erro ao buscar notícias:', erro);
            }
        };

        fetchNews();
    }, []);

    return (
            <FlatList
                data={artigos}
                keyExtractor={(item) => item.uuid}
                renderItem={({ item }) => (
                    <View style={estilos.card}>
                        {item.image_url && (
                            <Image
                                source={{ uri: item.image_url }}
                                style={{ width: '100%', height: 200, marginBottom: 10 }}
                            />
                        )}
                        <Text style={estilos.titulo}>{item.title}</Text>
                        <Text style={estilos.descricao}>{item.description}</Text>
                        <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                            <Text style={{ color: '#4381f4ff', marginTop: 10
                            }}>Leia mais</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
    );
};

const estilos = {
    card:{
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 1,
    },
    titulo:{
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'justify',
    },
    descricao: {
        color: '#000',
        fontSize: 16,
        textAlign: 'justify',
    },
}

export default Principal;
