import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import globalStyles from '../styles/global'

const ReviewDetails = ({ navigation, ...props}) => {
    const backToHomeScreen = () => {
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Review Details</Text>
            <Button
                title="Back to Home Screen"
                onPress={backToHomeScreen}
            />
        </View>
    )
}


export default ReviewDetails;