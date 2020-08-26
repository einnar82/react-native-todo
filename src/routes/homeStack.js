import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../views/home'
import ReviewDetails from '../views/reviewDetails'
import Header from '../shared/header';

const Stack = createStackNavigator();
const screens = [
    {
        component: props => <Home {...props}/>,
        name: 'Home',
        options: props => ({
            headerTitle: () => <Header {...props} title="GameZone"/>
        })
    },
    {
        component: props => <ReviewDetails {...props}/>,
        name: 'ReviewDetails',
        options: {
            title: 'ReviewDetails'
        }
    }
]


const Routes = () => (
    <Stack.Navigator 
        initialRouteName="Home"
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

export default Routes;