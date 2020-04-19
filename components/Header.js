import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Header = () =>{
  return (
    <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
  )
}

const styles = StyleSheet.create({
  header:{
    height: 60,
    backgroundColor: 'darkslateblue'
  },
});

export default Header;