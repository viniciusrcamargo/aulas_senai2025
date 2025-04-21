import { StyleSheet, View } from 'react-native';
import Topo from './src/componentes/Topo';
import Tarefa from './src/componentes/Tarefa';

export default function App() {
  return (
    <> 
      <View style={estilos.container}>
        <Topo />
        <Tarefa />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'rows',
    backgroundColor: '#fff',
  },
});
