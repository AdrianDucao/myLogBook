import React from 'react';
import {View, Text, StyleSheet, Component, Button, TouchableOpacity} from 'react-native';
    
const AddButton = (props) =>{
  return (
    <View style={styles.content}>
      <Button style={styles.button}
        title="Add Log"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  content:{
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 5,
    margin: 10,
  },

  button:{
    fontSize: 100,
    fontWeight: '400',
  }
});

export default AddButton;