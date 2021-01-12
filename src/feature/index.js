import {} from 'native-base';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import ListaDePedidos from './Home/index';
// import Actualizacion from './Home/Actualizacion';
// import DistribucionVolumen from './otroTest/index';
// import Otror from './otroTest2';
// import InformacionDelCliente from './otroTest3/index';
// import Card from './otroTest4/index';
// import Buscador from './otroTest4/components/Buscador';
// import Switch from './otroTest4/components/Selector';
// import ReduxTest from './ReduxTest';
import ClientesVista1 from './clientes1/index';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F9F9',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
    display: 'flex',
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 18,
  },
  padreTitle: {
    display: 'flex',
    // flex: 1,
    // alignContent: 'center',
    alignItems: 'center',
  },
  actualizacion: {
    justifyContent: 'center',
  },
  lineaDivisoria: {
    backgroundColor: 'gray',
    height: 1.5,
  },
});

// let clientes = [
//   {
//     razonSocial: 'pepe',
//     nCliente: 12492,
//     telefono: 1133407414,
//     email: 'imanollopezQpepe',
//     estado: 'avtivo',
//     prioridad: 3,
//   },
//   {
//     razonSocial: 'Ceramica San Luis',
//     nCliente: 12492,
//     telefono: '4234-87809',
//     email: 'compras@ceramicasanluid.com',
//     estado: 'activo',
//     prioridad: 1,
//   },
//   {
//     razonSocial: 'manolo',
//     nCliente: 12492,
//     telefono: 1160257549,
//     email: 'imanollopezQpepe',
//     estado: 'desactivo',
//     prioridad: 2,
//   },
// ];

const App = () => {
  // const [valueSearch, setValueSearch] = React.useState('');
  // console.log(valueSearch);

  // const [valueSwitch, setValueSwitch] = React.useState('menor');

  // let nombre = clientes.filter((e) =>
  //   e.razonSocial.includes(valueSearch.toLowerCase()),
  // );
  // console.log(nombre, 'nombre');

  // console.log(clientes.sort((a, b) => a.prioridad - b.prioridad));
  // const menorAMayor = (a, b) => a.prioridad - b.prioridad;
  // const mayorAMenor = (a, b) => b.prioridad - a.prioridad;
  // console.log(valueSearch);

  return (
    <View style={styles.container}>
      <View style={styles.padreTitle}>
        <Text style={styles.title}>CLIENTES</Text>
      </View>
      <View style={styles.lineaDivisoria} />
      <ClientesVista1 />
      {/* <Actualizacion />

      <View>
        <Buscador value={valueSearch} setValue={setValueSearch} />

        <Switch valueSwitch={valueSwitch} setValueSwitch={setValueSwitch} />
        {clientes
          .filter((e) => e.razonSocial.includes(valueSearch.toLowerCase()))
          .sort(valueSwitch === 'menor' ? mayorAMenor : menorAMayor)
          .map((cliente, i) => (
            <Card key={i} cliente={cliente} />
          ))}
      </View> */}
      {/* <ReduxTest /> */}
    </View>
  );
};
export default App;

// {/* <View>
//   <Text style={styles.title}>Informacion del cliente</Text>
// </View> */}
// {/* <Otror /> */}
// {/* <ListaDePedidos />
// <ListaDePedidos />
// <ListaDePedidos /> */}
// {/* <DistribucionVolumen />
// <DistribucionVolumen />
// <DistribucionVolumen /> */}
// {/* <InformacionDelCliente /> */}
