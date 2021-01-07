import React, {Component} from 'react';
import {Card, CardItem, Body} from 'native-base';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  containerPadre: {
    marginTop: 12,
    borderRadius: 18,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  respuestaDatos: {
    flex: 1,
    marginLeft: 20,
  },
  border: {
    borderRadius: 18,
  },
  datos: {
    fontSize: 14,
    color: '#939598',
  },
  respuestaDatos2: {
    fontSize: 14,
    color: '#000',
    fontWeight: '900',
  },
});

const Cards = ({cliente}) => {
  return (
    <Card style={styles.containerPadre}>
      <CardItem style={styles.border}>
        <Body style={styles.container}>
          <View>
            <Text style={styles.datos}>Razon Social:</Text>
            <Text style={styles.datos}>N* Cliente:</Text>
            <Text style={styles.datos}>Telefono:</Text>
            <Text style={styles.datos}>Email:</Text>
            <Text style={styles.datos}>Estado:</Text>
          </View>
          <View style={styles.respuestaDatos}>
            <Text style={styles.respuestaDatos2}>{cliente.razonSocial}</Text>
            <Text style={styles.respuestaDatos2}>{cliente.nCliente}</Text>
            <Text style={styles.respuestaDatos2}>{cliente.telefono}</Text>
            <Text style={styles.respuestaDatos2}>{cliente.email}</Text>
            <Text style={styles.respuestaDatos2}>{cliente.estado}</Text>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
};

export default Cards;
