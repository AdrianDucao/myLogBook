import React, { Component } from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';

import Header from './components/Header';
import Input from './components/Input';
import TodoItem from './components/TodoItem';

export default class App extends React.Component{
  constructor(){
    super();
    
    this.state = {
      todoInput: '',
      todos:[
        {id: 0, title: 'sample1', done: false},
        {id: 1, title: 'sample2', done: false},
        {id: 2, title: 'sample3', done: false},
      ]
    }
  }

  addNewLog(){
    let todos = this.state.todos;

    todos.unshift({
      id: todos.length + 1,
      todos: this.state.todoInput,
      done:false
    });

  this.setState({
    todos,
    todoInput: ''
  });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="myLogBook" />
        <Input
          textChange={todoInput => this.setState({todoInput})}
          addNewLog={() => this.addNewLog()}
        />
        <FlatList 
          data={this.state.todos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item, index) => {
            return(
              <TodoItem 
                todoItem={item}
              />
            )
          }}
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