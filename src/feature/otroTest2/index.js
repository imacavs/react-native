import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Card from './components/Card';

const styles = StyleSheet.create({
  container2: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    display: 'flex',
    alignItems: 'flex-start',
    flex: 1,
  },
  number: {
    alignItems: 'flex-end',
    flex: 1,
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
  margin: {
    marginTop: 32,
  },
});

const CuentaCorriente = () => {
  return (
    <ScrollView>
      <View style={styles.container2}>
        <View style={styles.text}>
          <Text style={styles.datos}>Saldo:</Text>
          <Text style={styles.datos}>Deuda Vencida:</Text>
          <Text style={styles.datos}>Limite Credito:</Text>
          <Text style={styles.datos}>Coef Agotamiento:</Text>
          <Text style={styles.datos}>Creditos:</Text>
          <Text style={styles.datos}>Valoracion Comercial:</Text>
          <Text style={styles.datos}>Compromiso Total:</Text>
        </View>
        <View style={styles.number}>
          <Text style={styles.respuestaDatos}>-200</Text>
          <Text style={styles.respuestaDatos}>20000</Text>
          <Text style={styles.respuestaDatos}>5000</Text>
          <Text style={styles.respuestaDatos}>0.65</Text>
          <Text style={styles.respuestaDatos}>50000</Text>
          <Text style={styles.respuestaDatos}>160000</Text>
          <Text style={styles.respuestaDatos}>1000000</Text>
        </View>
      </View>
      <View style={styles.margin}>
        <Card />
        <Card />
      </View>
    </ScrollView>
  );
};

export default CuentaCorriente;
