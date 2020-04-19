import React from 'react';
import {View, Text, StyleSheet, Image, Component} from 'react-native';

const Header = () =>{
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>myLogBook</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    height: 60,
    backgroundColor: 'darkslateblue'
  },
  headerText:{
    color: 'white',
    fontSize: 30,
    padding: 5,
  }
});

export default Header;