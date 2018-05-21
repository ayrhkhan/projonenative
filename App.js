import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Superman from './components/Superman.js';
import Red from './components/Red.js';
import Blue from './components/Blue.js'
import Green from './components/Green.js';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Red/>
        <Blue/>
        <Green/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
});
