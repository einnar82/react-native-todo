import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import globalStyles from '../styles/global'

const Home = (props) => {
    console.log(props);
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home</Text>
            {/* <Button
                title="Go to Jane's profile"
                onPress={() =>
                    navigation.navigate('About', { name: 'Jane' })
                }
            /> */}
        </View>
    )
}
export default Home;