import { StyleSheet, Text, View } from 'react-native';
import Topo from './src/componentes/Topo';

export default function App() {
  return (
    <Topo />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
