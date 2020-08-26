import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import About from '../views/about'
import Header from '../shared/header';

const Stack = createStackNavigator();

const screens = [
    {
        component: props => <About {...props}/>,
        name: 'About',
        options: props => ({
            headerTitle: () => <Header {...props} title="About GameZone"/>
        })
    }
]


const AboutStack = () => (
    <Stack.Navigator 
        initialRouteName="About"
        screenOptions={{
            headerTintColor: '#444',
            headerStyle: {
                backgroundColor: '#eee',
                height: 60
            }
        }}>
        {screens.map((data, index) =>  (
                <Stack.Screen
                    name={data.name}
                    options={data.options}
                    key={index}>
                    {data.component}
                </Stack.Screen>
            ))}
    </Stack.Navigator>
)

export default AboutStack;