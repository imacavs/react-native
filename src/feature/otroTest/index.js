import React from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    marginBottom: 32,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 18,
    borderColor: 'black',
    borderWidth: 2,
    display: 'flex',
    flexDirection: 'column',
  },
  title1: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  datos: {
    fontSize: 14,
    color: '#939598',
  },
  datosRespuesta: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  lineaDivisoria: {
    backgroundColor: 'gray',
    height: 1.5,
  },
  containerCeramica: {
    backgroundColor: 'white',
    margin: 8,
  },
  text: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 4,
    marginTop: 8,
  },
  text2: {
    display: 'flex',
    flexDirection: 'row',
    margin: 8,
  },
  hijos: {
    flex: 1,
  },
  margin: {
    margin: 8,
  },
});

const DistribucionVolumen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.containerCeramica}>
          <View>
            <Text style={styles.title1}>Ceramica San Luis</Text>
          </View>
          <View style={styles.text}>
            <View style={styles.hijos}>
              <Text style={styles.datos}>Volumen Real:</Text>
              <Text style={styles.datos}>Volumen Proyectado:</Text>
            </View>
            <View style={styles.hijos}>
              <Text style={styles.datosRespuesta}>1000</Text>
              <Text style={styles.datosRespuesta}>1100</Text>
            </View>
          </View>
        </View>
        <View style={styles.lineaDivisoria} />
        <View style={styles.margin}>
          <View>
            <Text style={styles.title2}>Jerarquia</Text>
          </View>
          <View style={styles.text}>
            <View style={styles.hijos}>
              <Text style={styles.datos}>Cliente:</Text>
              <Text style={styles.datos}>Volumen Real:</Text>
              <Text style={styles.datos}>Volumen Proyectado:</Text>
            </View>
            <View style={styles.hijos}>
              <Text style={styles.datosRespuesta}>corralon san luis</Text>
              <Text style={styles.datosRespuesta}>1000</Text>
              <Text style={styles.datosRespuesta}>1100</Text>
            </View>
          </View>
        </View>
        <View style={styles.lineaDivisoria} />
        <View style={styles.text2}>
          <View style={styles.hijos}>
            <Text style={styles.datos}>Cliente:</Text>
            <Text style={styles.datos}>Volumen Real:</Text>
            <Text style={styles.datos}>Volumen Proyectado:</Text>
          </View>
          <View style={styles.hijos}>
            <Text style={styles.datosRespuesta}>corralon san luis</Text>
            <Text style={styles.datosRespuesta}>1000</Text>
            <Text style={styles.datosRespuesta}>1100</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DistribucionVolumen;
