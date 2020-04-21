import React from 'react';
import {View, Text, StyleSheet, Component, Button, TouchableOpacity} from 'react-native';
    
const AddButton = (props) =>{
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
    margin: 20,
  },

  button:{
    fontSize: 100,
    fontWeight: '400',
  }
});

export default AddButton;