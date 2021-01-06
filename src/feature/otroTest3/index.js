import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from './components/Card';
import CheckBoxExample from './components/CheckBox';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  datos: {
    marginRight: 20,
  },
  respuestaDatos: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 16,
  },
  texto: {
    fontSize: 14,
    color: '#939598',
  },
  componenteTags: {
    display: 'flex',
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
});

const InformacionDelCliente = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.datos}>
          <Text style={styles.texto}>Razon Social: </Text>
          <Text style={styles.texto}>Cuit: </Text>
          <Text style={styles.texto}>N* Cliente: </Text>
          <Text style={styles.texto}>Direccion: </Text>
          <Text style={styles.texto}>Email: </Text>
          <Text style={styles.texto}>Telefono: </Text>
        </View>
        <View style={styles.respuestaDatos}>
          <Text>Ceramica San Luis</Text>
          <Text>20-3078987656-0</Text>
          <Text>12492</Text>
          <Text>San Martin 232, Avellaneda, Bs As</Text>
          <Text>compras@ceramicasanluis.com</Text>
          <Text>4234-87809</Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Contactos</Text>
      </View>
      <Card />
      <View>
        <Text style={styles.title}>Tags relacionados</Text>
      </View>
      <View style={styles.componenteTags}>
        <View style={styles.flex}>
          <CheckBoxExample tag={'Tag uno'} />
          <CheckBoxExample tag={'Tag dos'} />
          <CheckBoxExample tag={'Tag tres'} />
        </View>
        <View style={styles.flex}>
          <CheckBoxExample tag={'Tag uno'} />
          <CheckBoxExample tag={'Tag dos'} />
          <CheckBoxExample tag={'Tag tres'} />
        </View>
      </View>
    </View>
  );
};

export default InformacionDelCliente;
