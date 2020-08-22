/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';
import Home from './src/views/home';
import Routes from './src/routes';


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
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
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
