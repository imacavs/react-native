import {View, Item, Input} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginTop: 12,
    marginBottom: 12,
  },
  icon: {
    paddingRight: 20,
  },
});

const Buscador = ({value, setValue}) => {
  return (
    <View style={styles.container}>
      <Item>
        <Input
          placeholder="Filtrar pedidos"
          onChangeText={(text) => {
            setValue(text);
          }}
          value={value}
        />
        <Icon name="swap" size={20} color="gray" style={styles.icon} />
      </Item>
    </View>
  );
};

export default Buscador;
