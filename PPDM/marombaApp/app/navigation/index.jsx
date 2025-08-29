import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home'
import Exercicios from '../pages/exercicios';

const Stack = createNativeStackNavigator();

export default function Navigator(){
    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
            <Stack.Screen name='Exercicios' component={Exercicios} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}