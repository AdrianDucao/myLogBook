import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const App = () =>{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <Image source={require('./img/me.jpg')} style={styles.img}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center"
  },

  text:{
    color:'darkslateblue', 
    fontSize: 30
  },

  img:{
    height: 100,
    width:100,
    borderRadius: 100 / 2,
  },
});

export default App;