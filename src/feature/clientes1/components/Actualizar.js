import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IconRefhresh from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 11,
    color: 'gray',
  },
});

const Actualizacion = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Actualizar</Text>
      <IconRefhresh name="refresh" size={30} color="gray" />
      <Text style={styles.text}>2/1/21 9:30</Text>
    </View>
  );
};

export default Actualizacion;
