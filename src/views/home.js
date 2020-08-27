import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import globalStyles from '../styles/global'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from '../shared/card'
import ReviewForm from './reviewForm';

const Home = ({navigation, ...props}) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [reviews, setReviews] = useState([
        {title: 'Lorem', rating: 5, body: 'ipsum dolor', key: '1'},
        {title: 'Hey', rating: 4, body: 'hey dolor', key: '2'},
        {title: 'Dude', rating: 3, body: 'dude dolor', key: '3'},
    ])

    const addReview = (review) => {
        setReviews(prevReviews => ([
            ...prevReviews,
            {
                key: Math.random().toString(),
                ...review
            }
        ]))
        setModalOpen(false)
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen}>
                <TouchableWithoutFeedback
                    onPress={() => Keyboard.dismiss()}>
                    <View style={styles.modalContent}>
                        <Icon 
                            name="close"
                            size={24}
                            style={{...styles.modalToggle, ...styles.modalClose}}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview}/>
                    </View>              
                </TouchableWithoutFeedback>
            </Modal>
            <Icon 
                name="add"
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    }
})
export default Home;