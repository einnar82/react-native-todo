/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Header from './src/components/Header';
import TodoItem from './src/components/TodoItem';
import AddTodo from './src/components/AddTodo';


const App: () => React$Node = () => {
  const [todos, setTodos] = useState(
    [{
      text: 'buy me coffee', key: '1',
    }, {
      text: 'create an app', key: '2',
    }, {
      text: 'play on the switch', key: '3',
    }])

  const removeItem = (id) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== id)
    })
  }

  const handleSubmit = text => {
    setTodos(prevTodos => {
      return [
        ...prevTodos,
        {
          text,
          key: Math.random().toString()
        }
      ]
    })
  }
  return (
    <View style={styles.container}>
      {/** header */}
      <Header />
      <View style={styles.content}>
        {/** to form */}
        <AddTodo handleSubmit={handleSubmit} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} removeItem={removeItem} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});

export default App;
