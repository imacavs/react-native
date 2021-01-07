import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 2,
    marginTop: 12,
    marginBottom: 12,
  },
});

const Buscador = ({value, setValue}) => {
  return (
    <TextInput
      style={styles.container}
      onChangeText={(text) => {
        setValue(text);
      }}
      value={value}
    />
  );
};

export default Buscador;
