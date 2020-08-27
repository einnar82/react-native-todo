import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native';

const Header = ({navigation, ...props}) => {
    // const navigation = useNavigation();
    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <View style={styles.header}>
            <Icon 
                name="menu" 
                size={28}
                style={styles.icon}
                onPress={openMenu}
                />
            <View style={styles.headerTitle}>
                <Image 
                    source={require('../../assets/images/heart_logo.png')}
                    style={styles.headerImage}
                    />
                <Text style={styles.headerText}>{props.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 14
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    },
    headerTitle: {
        flexDirection: 'row'
    }
})

export default Header;