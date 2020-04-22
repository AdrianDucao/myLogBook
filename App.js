import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Header from './components/Header';
import Input from './components/Input';

export default class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      todoInput: '',
      todos:[
        {id: 0, title: 'sample1', done: false},
      ]
    }
  }

  addNewLog(){
    console.log(this.state.todoInput);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="myLogBook" />
        <Input
          textChange={todoInput => todoInput}
          addNewLog={() => this.addNewLog}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});