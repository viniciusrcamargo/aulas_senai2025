import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import Home from '../pages/Home';
import Detalhes from '../pages/Detalhe';
import Notificacao from '../pages/Notificacao';
import Config from '../pages/Configuracoes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeStackNavigator(){
    return(
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle:{
                    backgroundColor: '#7093f4ff',
                    elevation: 0
                },
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: 'bold'},
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={Home} options={{title: 'Início'}}/>
            <Stack.Screen name="Detalhes" component={Detalhes} options={{title: 'Detalhes da Página'}}/>

        </Stack.Navigator>
    )
}
    function MainTabNavigator(){
        return(
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#fff',
                    tabBarInactiveTintColor: '#fff',
                    tabBarStyle:{
                        backgroundColor: '#7093f4ff',
                        borderTopWidth: 0,
                        elevation: 0
                    },
                    tabBarLabelStyle:{
                        fontSize: 12,
                        paddingBottom: 5
                    }
                }}
            >
                <Tab.Screen 
                    name="HomeStack"
                    component={HomeStackNavigator}
                    options={{
                        title: 'Início',
                        headerShown: false,
                        tabBarIcon: ({color, size}) =>(
                            <Ionicons name="home" color={color} size={size}/>
                        )
                    }}
                />
                <Tab.Screen 
                    name="SettingsTab"
                    component={Config}
                    options={{
                        title: 'Ajustes',
                        headerShown: false,
                        headerStyle: {backgroundColor: '#7093f4ff'},
                        headerTintColor: '#fff',
                        tabBarIcon: ({color, size}) =>(
                            <Ionicons name="settings-outline" color={color} size={size}/>
                        )
                    }}
                />

            </Tab.Navigator>
        )
    }

    export default function AppNavigator(){
        return(
            <Drawer.Navigator
                initialRouteName="Principal"
                screenOptions={{
                    headerStyle:{
                        backgroundColor: '#7093f4ff',
                        elevation: 0
                    },
                    headerTintColor: '#fff',
                    drawerStyle:{
                        backgroundColor: '#7093f4ff'
                    },
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#fff',
                    drawerLabelStyle: {marginLeft:5}
                }}  
            >
                <Drawer.Screen 
                    name="Principal"
                    component={MainTabNavigator}
                    options={{
                        title: 'Início',
                        drawerIcon: ({color,size}) =>(
                            <Ionicons name="home" color={color} size={size}/>
                        )
                    }}
                />
                <Drawer.Screen 
                    name="Notification"
                    component={Notificacao}
                    options={{
                        title: 'Notificações',
                        drawerIcon: ({color,size}) =>(
                            <Ionicons name="notifications-outline" color={color} size={size}/>
                        )
                    }}
                />
            </Drawer.Navigator>
        )
    }