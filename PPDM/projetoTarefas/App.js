import { StyleSheet, Text, View } from 'react-native';
import Topo from './src/componentes/Topo';
import Tarefa from './src/componentes/Tarefa';

export default function App() {
  return (
    <> 
      <Topo />
      <View style={estilos.container}>
        <Tarefa />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginLeft: -410,
    marginTop: 80,
    width: '100%'
  },
});
