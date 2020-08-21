import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TodoItem = ({ item, removeItem }) => {
    return (<TouchableOpacity onPress={() => removeItem(item.key)}>
        <View style={styles.item}>
            <Icon 
                name="delete"
                size={18}
                color='#333'/>
            <Text style={styles.itemText}>
                {item.text}
            </Text>
        </View>
    </TouchableOpacity>)

}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10
    }
})
export default TodoItem;