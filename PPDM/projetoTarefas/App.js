import { StyleSheet, View } from 'react-native';
import Topo from './src/componentes/Topo';
// import Tarefa from './src/componentes/Tarefa';
import ListaEstudos from './src/componentes/ListaEstudos';
import TopoEstudos from './src/componentes/TopoEstudos';

export default function App() {
  return (
    <> 
      <View style={estilos.container}>
        <TopoEstudos titulo="Lista de Estudos" />
        {/* <Tarefa /> */}
        <ListaEstudos />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});
