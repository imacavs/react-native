import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './Button';
import Switch from './Switch';

const styles = StyleSheet.create({
  containerPadre: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    paddingBottom: 25,
    marginTop: 20,
  },
  title: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  switchContainer: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
});

const Cards = () => {
  return (
    <View style={styles.containerPadre}>
      <View>
        <Text style={styles.title}>FILTRAR BUSQUEDA</Text>
      </View>
      <View style={styles.switchContainer}>
        <Switch />
      </View>
      <View style={styles.container}>
        <View style={styles.flex}>
          <Button name={'cemento B'} />
        </View>
        <View style={styles.flex}>
          <Button name={'cemento G'} />
        </View>
        <View style={styles.flex}>
          <Button name={'albanil'} />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.flex}>
          <Button name={'cal'} />
        </View>
        <View style={styles.flex}>
          <Button name={'hormigon'} />
        </View>
        <View style={styles.flex}>
          <Button name={'agregado'} />
        </View>
      </View>
    </View>
  );
};

export default Cards;
