import React from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import globalStyles from '../styles/global'
import Card from '../shared/card'

const ReviewDetails = ({ navigation, route, ...props}) => {
    // const rating = require('../../assets/images/rating-'+route.params.rating+'.png')
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>{route.params.title}</Text>
                <Text>{route.params.body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating: </Text>
                    <Image source={require('../../assets/images/rating-1.png')}/>
                </View>
                {/* <Text>{route.params.rating}</Text> */}
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {

    }
})


export default ReviewDetails;