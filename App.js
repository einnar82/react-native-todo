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
} from 'react-native';


const App: () => React$Node = () => {
  const [person, setPerson] = useState({
    name: 'mario',
    age: '0'
  })

  const handleTextChange = (val, key) => {
    setPerson(prevState => ({
      ...prevState,
      [key]: val
    }))
  }

  const { name, age } = person

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        value={name}
        onChangeText={val => { handleTextChange(val, 'name') }}
        style={styles.input}
        placeholder="eg: john doe"
      />
      <Text>The name: {name}</Text>
      <Text>Enter age:</Text>
      <TextInput
        value={age}
        keyboardType='numeric'
        onChangeText={val => { handleTextChange(val, 'age') }}
        style={styles.input}
        placeholder="eg: 99"
      />
      <Text>The age: {age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 7,
    margin: 20,
    width: 200
  }
});

export default App;
