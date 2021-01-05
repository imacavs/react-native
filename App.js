import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ListaDePedidos from './src/feature/Home/index';
import Actualizacion from './src/feature/Home/Actualizacion';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 18,
  },
  actualizacion: {
    flexDirection: 'row-reverse',
  },
});

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.actualizacion}>
        <Text>
          <Actualizacion />
        </Text>
      </View>
      <View>
        <Text style={styles.title}>Listado De Pedidos</Text>
      </View>
      <ListaDePedidos />
      <ListaDePedidos />
      <ListaDePedidos />
    </ScrollView>
  );
};
export default App;
