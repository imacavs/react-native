import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#C0392B',
  },
});

const VerMas = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ver Mas</Text>
    </View>
  );
};

export default VerMas;
