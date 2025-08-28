import { StyleSheet, View } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import TelaDescansoLongo from './componentes/telaDescansoLongo'

export default function Index() {
  return (
    <View style={estilos.container}>
      <LinearGradient
        colors={['#8B1FF8', '#041832', '#01080E']}
        style={estilos.background}
      />
      <TelaDescansoLongo/>
    </View>
  );
}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center'
  },
  background:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%'
  }
})