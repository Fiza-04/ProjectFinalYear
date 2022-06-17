import { View  } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Authentication/Login';
import Signin from '../Authentication/SignIn';
import Home from '../Home/Home';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <View style={{width:"100%" , height:"100%"}}>
            <NavigationContainer >
                <Stack.Navigator >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="signin" component={Signin} />
                    <Stack.Screen name="Home" component={Home} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default MainNavigation
