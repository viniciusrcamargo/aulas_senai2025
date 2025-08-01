import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, Pressable,ScrollView } from "react-native";

import Foto from '../assets/images/aluna.jpg';


export default function Index() {
  return (
    <SafeAreaView style={estilos.safeArea} >
      <View style={estilos.container}>

        <Image source={Foto} style={estilos.imagem}/>
        <View style={estilos.camposForm}>
            <Text style={estilos.label}>Nome</Text>
            <TextInput style={estilos.campoTexto}/>
            
            <Text style={estilos.label}>Idade</Text>
            <TextInput style={estilos.campoTexto} />

            <Text style={estilos.label}>CPF</Text>
            <TextInput style={estilos.campoTexto} />

            <Text style={estilos.label}>Telefone</Text>
            <TextInput style={estilos.campoTexto}/>

            <Text style={estilos.label}>Talemto</Text>
            <TextInput style={estilos.campoTexto}/>

            <Pressable style={estilos.botao}>
              <Text style={estilos.textoBotao}>Credenciar</Text>
            </Pressable>
            
            
          </View>
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  safeArea:{
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  imagem:{
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 40,
    marginBottom: 30
  },
  camposForm:{
    width: '100%',
  },
  label:{
    fontSize: 16,
    marginBottom: 8
  },
  campoTexto:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10
  },
  botao:{
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    padding: '10px',
    alignItems: 'center',
    backgroundColor: '#4453f5ff'
  },
  textoBotao:{
    color: '#ffffff',
    fontSize: '23px'    
  }

})