import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
// import ListaDePedidos from './src/feature/Home/index';
import Actualizacion from './src/feature/Home/Actualizacion';
// import DistribucionVolumen from './src/feature/otroTest/index';
// import Otror from './src/feature/otroTest2';
// import InformacionDelCliente from './src/feature/otroTest3/index';
import Card from './src/feature/otroTest4/index';
import Buscador from './src/feature/otroTest4/components/Buscador';
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
    justifyContent: 'center',
  },
});

let clientes = [
  {
    razonSocial: 'pepe',
    nCliente: 12492,
    telefono: 1133407414,
    email: 'imanollopezQpepe',
    estado: 'avtivo',
  },
  {
    razonSocial: 'Ceramica San Luis',
    nCliente: 12492,
    telefono: '4234-87809',
    email: 'compras@ceramicasanluid.com',
    estado: 'activo',
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
  },
];

const App = () => {
  const [value, setValue] = React.useState('');
  console.log(value);

  let nombre = clientes.filter((e) =>
    e.razonSocial.includes(value.toLowerCase()),
  );
  console.log(nombre, 'nombre');

  return (
    <ScrollView style={styles.container}>
      <Actualizacion />
      {/* <View>
        <Text style={styles.title}>Informacion del cliente</Text>
      </View> */}
      {/* <Otror /> */}
      {/* <ListaDePedidos />
      <ListaDePedidos />
      <ListaDePedidos /> */}
      {/* <DistribucionVolumen />
      <DistribucionVolumen />
      <DistribucionVolumen /> */}
      {/* <InformacionDelCliente /> */}
      <View>
        <Buscador value={value} setValue={setValue} />

        {clientes
          .filter((e) => e.razonSocial.includes(value.toLowerCase()))
          .map((cliente) => (
            <Card cliente={cliente} />
          ))}
      </View>
    </ScrollView>
  );
};
export default App;
