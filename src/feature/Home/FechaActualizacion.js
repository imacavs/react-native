import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fecha: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
});

const FechaActualizacion = () => {
  return (
    <View>
      <Text style={styles.FechaActualizacion}>12/10/20</Text>
    </View>
  );
};

export default FechaActualizacion;
