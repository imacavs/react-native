import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    marginTop: 20,
  },
  text: {
    // flex: 1,
    // alignItems: 'flex-start',
    paddingTop: 15,
    padding: 15,
    paddingLeft: 35,
  },
});

const DetalleCliente = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text>Ceramica San Luis - 1252 - Activo</Text>
        <Text>Telefono: 4233-5555</Text>
        <Text>Mail: mail@mail.com.ar</Text>
      </View>
    </View>
  );
};

export default DetalleCliente;
