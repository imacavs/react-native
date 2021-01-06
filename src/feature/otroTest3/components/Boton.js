import React, {Component} from 'react';
import {Button} from 'native-base';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-end',
  },
  text1: {
    color: 'red',
    marginRight: 25,
    fontSize: 16,
  },
  text2: {
    color: 'black',
    marginRight: 25,
    fontSize: 16,
  },
});

export default class ButtonTransparentExample extends Component {
  render() {
    return (
      <Button transparent danger style={styles.container}>
        <Text style={styles.text1}>Eliminar</Text>
        <Text style={styles.text2}>Editar</Text>
      </Button>
    );
  }
}
