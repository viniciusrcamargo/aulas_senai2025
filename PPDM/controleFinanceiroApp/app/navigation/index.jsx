import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/login';
import Dashboard from '../pages/dashboard';

const Stack = createNativeStackNavigator();

export default function Navigation(){
    return(
        <Stack.Navigator screenOption={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} options={{title:'', headerShown: false}}  />
            <Stack.Screen name="Dashboard" component={Dashboard} options={{title:'', headerShown: false}}  />
        </Stack.Navigator>
    )
}