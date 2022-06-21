import { View  } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Authentication/Login';
import Signin from '../Authentication/SignIn';
import Home from '../Home/Home';
import Team1 from '../Teams/Team1';
import Project from '../Layers/Project';
import Activity from '../Layers/Activity';
import DB from '../Layers/Db';
import Calendar from '../Layers/Cal';
import Checklist from '../Layers/Checklist';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <View style={{width:"100%" , height:"100%"}}>
            <NavigationContainer >
                <Stack.Navigator screenOptions={{headerShown:false}}>
                    {/* <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="signin" component={Signin} />
                    <Stack.Screen name="Home" component={Home} /> */}
                    <Stack.Screen name="Team1" component={Team1} />
                    <Stack.Screen name="Project" component={Project} />
                    <Stack.Screen name="Activity" component={Activity} />
                    <Stack.Screen name="DB" component={DB} /> 
                    <Stack.Screen name="Calendar" component={Calendar} />
                    <Stack.Screen name="Checklist" component={Checklist} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}

export default MainNavigation
