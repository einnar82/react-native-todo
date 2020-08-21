import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    text: {
        fontFamily: 'Nunito',
        fontSize: 30
    }
})

export default Home;