import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 14,
    color: '#939598',
  },
  number: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
});

const Actualizacion = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ultima Actualizacion: </Text>
      <Text style={styles.number}>12/10/20</Text>
    </View>
  );
};

export default Actualizacion;
