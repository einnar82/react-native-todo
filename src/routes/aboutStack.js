import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/home'
import About from '../views/about'
import HomeStack from './homeStack'

const Stack = createStackNavigator();

const screens = [
    {
        component: props => <About {...props}/>,
        name: 'About',
        options: {
            title: 'About'
        }
    }
]


const AboutStack = () => (
    <Stack.Navigator initialRouteName="About">
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