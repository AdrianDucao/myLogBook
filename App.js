class Button extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          padding: 20,
          borderRadius: 50
        }}
      >
       <Text
         style={{
           color: "white",
           fontSize: 20
         }}
       >
         </Text>
       </TouchableOpacity>
    );
  }
 }

 const styles = StyleSheet.create({
  box: {
  backgroundColor: “blue”,
  padding: 20,
  borderRadius: 50
  },
  text: {
  color: “white”,
  fontSize: 20
  }
 });
 class Button extends React.Component {
  render() {
  return (
  <TouchableOpacity style={styles.box}>
  <Text style={styles.text}>
  {this.props.title}
  </Text>
  </TouchableOpacity>
  );
  }
 }
export default App;
