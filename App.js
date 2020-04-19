import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from './components/Header';

const App = () =>{
  return (
    <View style={styles.container}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
  },

  text:{
    color:'darkslateblue', 
    fontSize: 30
  },
});

export default App;