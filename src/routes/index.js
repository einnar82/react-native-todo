import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import screens from './screens'
const Stack = createStackNavigator();

const Routes = () => (
    <Stack.Navigator initialRouteName="Home">
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