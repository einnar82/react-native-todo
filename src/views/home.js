import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import globalStyles from '../styles/global'

const Home = ({navigation, ...props}) => {
    const pressHandler = () => {
        navigation.navigate('ReviewDetails')
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home</Text>
            <Button
                title="Go to Review Details"
                onPress={pressHandler}
            />
        </View>
    )
}
export default Home;