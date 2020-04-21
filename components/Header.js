import React from 'react';
import {View, Text, StyleSheet, Component} from 'react-native';

const Header = (props) =>{
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    height: 60,
    backgroundColor: 'darkslateblue',
  },
  headerText:{
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center'
  }
});

export default Header;