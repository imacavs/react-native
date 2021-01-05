import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
// import ListaDePedidos from './src/feature/Home/index';
import Actualizacion from './src/feature/Home/Actualizacion';
// import DistribucionVolumen from './src/feature/otroTest/index';
import Otror from './src/feature/otroTest2';

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
    // flexDirection: 'row-reverse',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Actualizacion />
      <View>
        <Text style={styles.title}>Cuenta Corriente</Text>
      </View>
      <Otror />
      {/* <ListaDePedidos />
      <ListaDePedidos />
      <ListaDePedidos /> */}
      {/* <DistribucionVolumen />
      <DistribucionVolumen />
      <DistribucionVolumen /> */}
    </ScrollView>
  );
};
export default App;
