import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Card, CardItem, Body} from 'native-base';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    borderRadius: 18,
  },
  datos: {
    fontSize: 14,
    color: '#939598',
  },
  respuestaDatos: {
    fontSize: 13,
    color: '#000',
    fontWeight: '900',
  },
  flex: {
    flex: 1,
  },
  magin: {
    marginRight: 16,
  },
  borderRadius: {
    borderRadius: 18,
  },
  margin: {
    marginTop: 32,
  },
});

export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Card style={styles.card}>
        <CardItem style={styles.borderRadius}>
          <Body>
            <View style={styles.container}>
              <View style={styles.magin}>
                <Text style={styles.datos}>Fecha: </Text>
                <Text style={styles.datos}>Item: </Text>
                <Text style={styles.datos}>Descripcion: </Text>
                <Text style={styles.datos}>Fecha Vto: </Text>
                <Text style={styles.datos}>Importe: </Text>
              </View>
              <View style={styles.flex}>
                <Text style={styles.respuestaDatos}>01/11/2020</Text>
                <Text style={styles.respuestaDatos}>FC</Text>
                <Text style={styles.respuestaDatos}>Factura 001-0021331</Text>
                <Text style={styles.respuestaDatos}>01/12/2020</Text>
                <Text style={styles.respuestaDatos}>20000</Text>
              </View>
            </View>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
