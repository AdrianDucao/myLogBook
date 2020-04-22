import React from 'react';
import {View, Text, StyleSheet, TextInput, Component, TouchableOpacity} from 'react-native';

import AddButton from './AddButton';

const Input = (props) =>{
  return (
    <View style={styles.container}>
        <TextInput 
            style={styles.input}
            onChangeText={(todoInput) => props.textChange(todoInput)}
            value={props.todoInput} 
        />
        <TouchableOpacity style={styles.addLog} onPress={props.addNewLog}>
            <AddButton />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  input:{
    borderColor: "#20232a"
  },

  addLog:{

  }
});

export default Input;