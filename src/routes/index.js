import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../views/home'
import AboutStack from './aboutStack'
import HomeStack from './homeStack'

const Drawer = createDrawerNavigator();
const screens = [
    {
        component: props => <HomeStack {...props}/>,
        name: 'Home',
        options: {
            title: 'Welcome'
        }
    },
    {
        component: props => <AboutStack {...props}/>,
        name: 'About',
        options: {
            title: 'About'
        }
    }
]


const MainStack = () => (
    <Drawer.Navigator initialRouteName="Home">
        {screens.map((data, index) =>  (
                <Drawer.Screen
                    name={data.name}
                    options={data.options}
                    key={index}>
                    {data.component}
                </Drawer.Screen>
            ))}
    </Drawer.Navigator>
)

export default MainStack;