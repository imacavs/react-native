import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Card} from 'native-base';
import ButtonTransparentExample from './Boton';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
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
    marginRight: 30,
  },
  borderRadius: {
    borderRadius: 18,
  },
  margin: {
    marginTop: 32,
  },
  lineaDivisoria: {
    backgroundColor: 'gray',
    height: 1.5,
  },
  containerDatosTexto: {
    display: 'flex',
    flexDirection: 'row',
    margin: 15,
  },
  containerDatosResultado: {
    margin: 15,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default class CardHeaderFooterExample extends Component {
  render() {
    return (
      <Card style={styles.card}>
        <View style={styles.container}>
          <View style={styles.containerDatosTexto}>
            <View style={styles.magin}>
              <Text style={styles.datos}>Nombre: </Text>
              <Text style={styles.datos}>Email: </Text>
              <Text style={styles.datos}>Telefono: </Text>
              <Text style={styles.datos}>Area: </Text>
            </View>
            <View style={styles.flex}>
              <Text style={styles.respuestaDatos}>Pedro Perez</Text>
              <Text style={styles.respuestaDatos}>
                pperez@ceramicasanlui.com
              </Text>
              <Text style={styles.respuestaDatos}>11-7689-8762</Text>
              <Text style={styles.respuestaDatos}>Pagos</Text>
            </View>
          </View>
          <View style={styles.lineaDivisoria} />
          <View style={styles.containerDatosResultado}>
            <ButtonTransparentExample />
          </View>
        </View>
      </Card>
    );
  }
}
