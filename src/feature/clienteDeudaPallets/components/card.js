import React from 'react';
import {Card, CardItem, Body} from 'native-base';
import {StyleSheet, Text, View} from 'react-native';
import VerMas from './VerMas';

const styles = StyleSheet.create({
  containerPadre: {
    marginTop: 12,
    borderRadius: 10,
    display: 'flex',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  respuestaDatos: {
    flex: 1,
  },
  border: {
    borderRadius: 10,
  },
  datos: {
    fontSize: 14,
    color: 'gray',
  },
  respuestaDatos2: {
    fontSize: 14,
    color: '#000',
    fontWeight: '900',
  },
  card: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  paddingLeft: {
    paddingHorizontal: 20,
  },
});

const Cards = ({cliente}) => {
  return (
    <Card style={styles.containerPadre}>
      <CardItem style={styles.border}>
        <Body style={styles.container}>
          <View style={styles.card}>
            <View>
              <Text style={styles.respuestaDatos2}>
                Razon Social: {cliente.razonSocial}
              </Text>
              <Text style={styles.respuestaDatos2}>
                N* Cliente: {cliente.nCliente}
              </Text>
              <Text style={styles.respuestaDatos2}>Saldo: {cliente.saldo}</Text>
              <Text style={styles.respuestaDatos2}>
                Exigible: {cliente.exigible}
              </Text>
            </View>
          </View>
          <View style={styles.paddingLeft}>
            <VerMas />
          </View>
        </Body>
      </CardItem>
    </Card>
  );
};

export default Cards;
