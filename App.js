import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

import Header from './components/Header';
import AddButton from './components/AddButton';

const App = () =>{
  return (
    <View style={styles.container}>
      <Header title="myLogBook" />
      <AddButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});

export default App;