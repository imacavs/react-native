import React from 'react';
import {Card, CardItem, Body} from 'native-base';
import {StyleSheet, Text, View} from 'react-native';
import VerMas from './VerMas';
import ButtonNegative from './ButtonNegative';

const styles = StyleSheet.create({
  containerPadre: {
    marginTop: 18,
    borderRadius: 10,
    display: 'flex',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  container2: {
    display: 'flex',
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
  lineaDivisoria: {
    backgroundColor: 'gray',
    height: 1.5,
  },
  circulo: {
    marginLeft: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#A93226',
    marginRight: 18,
    marginTop: 10,
  },
});

const Cards = ({cliente}) => {
  return (
    <Card style={styles.containerPadre}>
      <CardItem style={styles.border}>
        <Body style={styles.container2}>
          <View style={styles.container}>
            <View style={styles.circulo} />
            <View style={styles.card}>
              <View>
                <Text style={styles.respuestaDatos2}>
                  Estado: {cliente.estado}
                </Text>
                <Text style={styles.respuestaDatos2}>
                  N* Pedido: {cliente.nCliente}
                </Text>
                <Text style={styles.respuestaDatos2}>
                  Fecha: {cliente.fecha}
                </Text>
              </View>
            </View>
            <View style={styles.paddingLeft}>
              <VerMas />
            </View>
          </View>
          <View style={styles.lineaDivisoria} />
          <ButtonNegative style={{}} />
        </Body>
      </CardItem>
    </Card>
  );
};

export default Cards;
