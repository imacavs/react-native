import {View, Icon, Item, Input} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginTop: 12,
    marginBottom: 12,
  },
});

const Buscador = ({value, setValue}) => {
  return (
    <View style={styles.container}>
      {/* <TextInput
        style={styles.container}
        placeholder={'Buscar Cliente'}
        onChangeText={(text) => {
          setValue(text);
        }}
        value={value}
      /> */}
      <Item>
        <Input
          placeholder="Buscar Cliente"
          onChangeText={(text) => {
            setValue(text);
          }}
          value={value}
        />
        <Icon active name="search" />
      </Item>
    </View>
  );
};

export default Buscador;
