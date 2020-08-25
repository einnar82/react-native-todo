import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import globalStyles from '../styles/global'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

const Home = ({navigation, ...props}) => {
    const [reviews, setReviews] = useState([
        {title: 'Lorem', rating: 5, body: 'ipsum dolor', key: '1'},
        {title: 'Hey', rating: 4, body: 'hey dolor', key: '2'},
        {title: 'Dude', rating: 3, body: 'dude dolor', key: '3'},
    ])

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
export default Home;