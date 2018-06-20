import React from 'react';
import { StyleSheet, View } from 'react-native';
import Chat from './Chat';

const App = () => (
  <View style={styles.container}>
    <Chat />
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
