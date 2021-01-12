import {} from 'native-base';
import React from 'react';
import {View, ScrollView} from 'react-native';
import Card from './components/card';
import Buscador from './components/Buscador';
// import FooterApp from './components/footer';

let clientes = [
  {
    razonSocial: 'pepe',
    nCliente: 12492,
    telefono: 1133407414,
    email: 'imanollopezQpepe',
    estado: 'avtivo',
    prioridad: 3,
  },
  {
    razonSocial: 'ceramica San Luis',
    nCliente: 12492,
    telefono: '4234-87809',
    email: 'compras@ceramicasanluid.com',
    estado: 'activo',
    prioridad: 1,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
  },
];

const ClientesVista1 = () => {
  const [valueSearch, setValueSearch] = React.useState('');

  return (
    <View>
      <Buscador value={valueSearch} setValue={setValueSearch} />
      <ScrollView>
        {clientes
          .filter((e) => e.razonSocial.includes(valueSearch.toLowerCase()))
          // .sort(valueSwitch === 'menor' ? mayorAMenor : menorAMayor)
          .map((cliente, i) => (
            <Card key={i} cliente={cliente} />
          ))}
      </ScrollView>
    </View>
  );
};

export default ClientesVista1;
