import React from 'react';
import {View, Text, StyleSheet, Image, Component, Button} from 'react-native';

const AddButton = () =>{
  return (
    <View style={styles.content}>
      <Button style={styles.button}
        title="Add Book"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  content:{
    padding: 10,
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 5,
  },

  button:{
    fontSize: 100,
    fontWeight: '400',
  }
});

export default AddButton;