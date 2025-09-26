import {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ActivityIndicator, ScrollView} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagemInicial from '../../../assets/imagem-inicial.png';

export default function Login(){
    const rota = useRoute();
    const navegacao = useNavigation();
    const titulo = rota.params?.titulo ?? 'Login';

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [loading, setLoading] = useState(false);

    const execSubmit = async () =>{
        if(!email || !senha){
            setErro('Preencha o e-mail ou senha!');
            return;
        }

        setLoading(true);
        setErro('');

        try {
            const resposta = await fetch('http://localhost:3000/usuarios/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({email,senha})
            });
            const dados = await resposta.json();
            if(resposta.ok){
                Alert.alert('Sucesso', 'Login bem-sucedido');
                await AsyncStorage.setItem('usuario', JSON.stringify(dados.usuario));
                navegacao.navigate('Dashboard');
            }else{
                setErro(dados.message || 'Erro ao fazer login!')
            }
        } catch (erro) {
            console.log('Falha ao conectar a API', erro);
            setErro('Não foi possível conectar ao servidor'+ erro);
        }finally{
            setLoading(false);
        }
    };

    return(
        <View style={estilos.corpo}>
            <KeyboardAvoidingView behavior={Platform.select({ios: 'padding', android: undefined})} style={{flex:1}}>
                <ScrollView contentContainerStyle={estilos.container} keyboardShouldPersistTaps="handled">
                    <View style={estilos.leftPane}>
                        <Image 
                            source={ImagemInicial}
                            resizeMode="cover"
                            style={estilos.imagem}
                            accessible
                            accessibilityLabel='Imagem Inicial'
                        />
                    </View>

                    <View style={estilos.painel}>
                        <Text style={estilos.titulo}>Titulo</Text>

                        <View style={estilos.formGroup}>
                            <Text style={estilos.label}>E-mai</Text>
                            <TextInput 
                                style={estilos.input}
                                placeholder='Insira o e-mail'
                                placeholderTextColor='#cfe1ff'
                                keyboardType='email-address'
                                value={email}
                                onChangeText={setEmail}
                                textContentType='emailAddress'
                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}