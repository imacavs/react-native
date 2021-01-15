import {} from 'native-base';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './components/Card';
import Actualizacion from './components/Actualizar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Volumen = () => {
  return (
    <View style={styles.container}>
      <Actualizacion />
      <Card />
    </View>
  );
};

export default Volumen;
