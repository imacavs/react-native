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

// import ClientesVista1 from './clientes1/index';
import PanelControl from './panelDeControl1/index';

import DetalleCliente from './detalleCliente/index';
import Actualizacion from './detalleCliente/components/Actualizacion';
import Card from './detalleCliente/components/Card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFont from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // backgroundColor: '#F8F9F9',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
    display: 'flex',
    flex: 1,
  },
  title: {
    fontSize: 24,
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

const iconoDinero = <Icon name="attach-money" size={25} color="#A93226" />;
const iconoPedidos = (
  <IconSimple name="screen-tablet" size={25} color="#A93226" />
);
const iconButton = <IconAnt name="rightcircle" size={18} color="#A93226" />;
const iconEncuesta = <IconAnt name="profile" size={25} color="#A93226" />;
const iconPallets = (
  <IconFeather name="align-justify" size={25} color="#A93226" />
);
const iconVolumenH = <IconFeather name="bar-chart" size={25} color="#A93226" />;
const iconContactos = <IconAnt name="idcard" size={35} color="#A93226" />;
const iconTags = <IconAnt name="infocirlceo" size={25} color="#A93226" />;
const iconVolumen = <IconAnt name="piechart" size={25} color="#A93226" />;
const iconCtaCte = <IconFont name="piggy-bank" size={25} color="#A93226" />;

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
      {/* <View style={styles.padreTitle}>
        <Text style={styles.title}>CLIENTES</Text>
      </View>
      <View style={styles.lineaDivisoria} />
      <ClientesVista1 /> */}

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

      <View style={styles.padreTitle}>
        <Text style={styles.title}>PANEL DE CONTROL</Text>
      </View>
      <PanelControl />

      {/* <Actualizacion />
      <DetalleCliente />
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Card title={'PEDIDOS'} icon={iconoPedidos} iconButton={iconButton} />
        <Card title={'PRECIOS'} icon={iconoDinero} iconButton={iconButton} />
      </View>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Card title={'VOLUMEN'} icon={iconVolumen} iconButton={iconButton} />
        <Card
          title={'volumen historico'}
          icon={iconVolumenH}
          iconButton={iconButton}
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Card title={'CTA CTE'} icon={iconCtaCte} iconButton={iconButton} />
        <Card
          title={'CTA CTE PALLETS'}
          icon={iconPallets}
          iconButton={iconButton}
        />
      </View>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Card title={'ENCUESTAS'} icon={iconEncuesta} iconButton={iconButton} />
        <Card title={'TAGS'} icon={iconTags} iconButton={iconButton} />
      </View>
      <Card title={'CONTACTOS'} icon={iconContactos} iconButton={iconButton} /> */}
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
