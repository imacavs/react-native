import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FechaActualizacion from './FechaActualizacion';

const styles = StyleSheet.create({
  actualizacion: {
    fontSize: 14,
    color: '#939598',
  },
});

const Actualizacion = () => {
  return (
    <View>
      <Text style={styles.actualizacion}>
        Ultima Actualizacion: <FechaActualizacion />
      </Text>
    </View>
  );
};

export default Actualizacion;
