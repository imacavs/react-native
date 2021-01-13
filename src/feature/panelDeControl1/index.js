import React from 'react';
import {StyleSheet, View} from 'react-native';
import Actualizacion from './components/Actualizacion';
import Volumen from './components/Volumen';
import DatosCliente from './components/DatosCliente';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
  },
  flex: {
    flex: 1,
  },
  containerHijo1: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  containerHijo2: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F8F9F9',
    borderRadius: 18,
  },
});

const PanelControl = () => {
  return (
    <View style={{}}>
      <View style={styles.row}>
        <DatosCliente number={2} title={'CLIENTES BLOQUEADOS'} />
        <DatosCliente number={121} number2={'/165'} title={'PEDIDOS'} />
      </View>
      <View style={styles.row}>
        <DatosCliente number={0} title={'CLIENTES DEUDA PALLETS'} />
        <DatosCliente number={0} title={'CLIENTES DEUDA VENCIDA'} />
      </View>
      <Volumen />
      <Actualizacion />
    </View>
  );
};

export default PanelControl;
