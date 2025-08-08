import { View, StyleSheet, Text } from 'react-native';
import Lista from './componentes/lista';


const fotos = [
  {
    id: 1,
    titulo: 'Placa mãe',
    descricao: 'Uma placa mãe adaptada para IA',
    imagem: require('../assets/images/motherboard.jpg'),
  },
  {
    id: 2,
    titulo: 'Gameboy',
    descricao: 'O melhor video game de bolso',
    imagem: require('../assets/images/gameboy.jpg'),
  },
  {
    id: 3,
    titulo: 'Robô',
    descricao: 'O primeiro robô humanóide para limpar a casa',
    imagem: require('../assets/images/robo.jpg'),
  },
  {
    id: 4,
    titulo: 'Smartwatch',
    descricao: 'O relógio mais inteligente do momento',
    imagem: require('../assets/images/smartwatch.jpg'),
  },
  {
    id: 5,
    titulo: 'Time',
    descricao: 'O melhor time dev do Senai',
    imagem: require('../assets/images/team.jpg'),
  },
];

export default function Index() {
  return (
    <>
      <View style={estilos.cabecalho}>
        <Text style={estilos.titulo}>Galeria de Fotos</Text>
      </View>
      <View style={estilos.container}>
        <Lista fotos={fotos} />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    padding: '20px',
    backgroundColor: '#aca0a0ff'
  },
  cabecalho:{
    width: '100%',
    height: 60,
    backgroundColor: '#f6f4f4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 29
  }
})