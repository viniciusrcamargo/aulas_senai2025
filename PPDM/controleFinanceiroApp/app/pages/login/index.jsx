import {useState} from 'react';
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ActivityIndicator, ScrollView} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagemInicial from '../../../assets/images/imagem-inicial.png';

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
                setErro(dados.erro || 'Erro ao fazer login!')
            }
        } catch (erro) {
            console.log('Falha ao conectar a API', erro);
            setErro('Não foi possível conectar ao servidor'+ erro);
        }finally{
            setLoading(false);
        }
    };
    
    const irParaRegistro = ( )=>{
        navegacao.navigate('Registrar');
    }

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
                        <View style={estilos.formGroup}>
                            <Text style={estilos.label}>Senha</Text>
                            <TextInput 
                                style={estilos.input}
                                placeholder='Insira a senha'
                                placeholderTextColor='#cfe1ff'
                                secureTextEntry
                                value={senha}
                                onChangeText={setSenha}
                                textContentType='password'
                            />
                        </View>
                        {!!erro && (
                            <View style={estilos.erroBox}>
                                <Text style={estilos.erroText}>{erro}
                                </Text>
                            </View>
                        )}

                        <TouchableOpacity
                            style={[estilos.botao, loading && estilos.botaoInativo]}
                            onPress={execSubmit}
                            disabled={loading}
                            activeOpacity={0.8}
                        >
                            {
                                loading ? (
                                    <ActivityIndicator color="#fff"/>
                                ) : (
                                    <Text style={estilos.textoBotao}>Login</Text>
                                )
                            }
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[estilos.botao, loading && estilos.botaoInativo]}
                            onPress={execSubmit}
                            disabled={loading}
                            activeOpacity={0.8}
                        >
                            {
                                loading ? (
                                    <ActivityIndicator color="#fff"/>
                                ) : (
                                    <Text style={estilos.textoBotao}>Login</Text>
                                )
                            }
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[estilos.botao, loading && estilos.botaoInativo]}
                            onPress={execSubmit}
                            disabled={loading}
                            activeOpacity={0.8}
                        >
                            {
                                loading ? (
                                    <ActivityIndicator color="#fff"/>
                                ) : (
                                    <Text style={estilos.textoBotao}>Registrar</Text>
                                )
                            }
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

const estilos = StyleSheet.create({
    corpo:{
        flex: 1,
        backgroundColor: '#2A83F0'
    },
    container:{
        flexGrow: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftPane:{
        width: '100%',
        maxWidth: 600,
        alignItems: 'center',
        marginBottom: 24
    },
    imagem:{
        width: '80%',
        height: 220,
        borderRadius: 20
    },
    painel:{
        width: '100%',
        maxWidth: 600,
        backgroundColor: 'transparent',
        padding: 16,
        borderRadius: 12
    },
    titulo:{
        color: '#fff',
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 16
    },
    formGroup:{
        marginBottom: 12
    },
    label:{
        color: 'white',
        marginBottom: 6,
        fontSize: 14
    },
    input:{
        backgroundColor: 'rgba(255,255,255,0.15)',
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 12,
        color: 'white',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)'
    },
    erroBox:{
        backgroundColor: '#ffdddd',
        borderRadius: 8,
        padding: 10,
        marginTop: 6,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ff6b6b'
    },
    erroTexto:{
        color: '#b00020',
        fontSize: 14
    },
    botao:{
        backgroundColor: '#0d6efd',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 6
    },
    botaoInativo:{
        opacity: 0.7
    },
    textoBotao:{
        color: '#fff',
        fontWeight: '700',
        fontSize: 16
    },
    linkRegistro:{
        marginTop: 12,
        alignItems: 'center'
    },
    textoRegistro:{
        color: 'white',
        textDecorationLine: 'underline'
    }
})