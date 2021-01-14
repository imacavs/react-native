import {} from 'native-base';
import React from 'react';
import {View, ScrollView} from 'react-native';
import Card from './components/card';
import Buscador from './components/Buscador';
import Actualizacion from './components/Actualizar';

let clientes = [
  {
    razonSocial: 'pepe',
    nCliente: 923344,
    telefono: 1133407414,
    email: 'imanollopezQpepe',
    estado: 'endiente',
    prioridad: 3,
    fecha: '12/02/2020',
    color: 'yellow',
  },
  {
    razonSocial: 'ceramica San Luis',
    nCliente: 425986,
    telefono: '4234-87809',
    email: 'compras@ceramicasanluid.com',
    estado: 'cancelado',
    prioridad: 1,
    fecha: '04/07/2020',
    color: '#A93226',
  },
  {
    razonSocial: 'manolo',
    nCliente: 298753,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'entregado',
    prioridad: 2,
    fecha: '07/09/2020',
    color: 'blue',
  },
  {
    razonSocial: 'manolo',
    nCliente: 396248,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'entregado',
    prioridad: 2,
    fecha: '24/05/2020',
    color: 'blue',
  },
  {
    razonSocial: 'manolo',
    nCliente: 156823,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'cancelado',
    prioridad: 2,
    fecha: '05/07/2020',
    color: '#A93226',
  },
  {
    razonSocial: 'manolo',
    nCliente: 238467,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'pendiente',
    prioridad: 2,
    fecha: '29/08/2020',
    color: 'yellow',
  },
  {
    razonSocial: 'manolo',
    nCliente: 159357,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'pendiente',
    prioridad: 2,
    fecha: '12/02/2020',
    color: 'yellow',
  },
  {
    razonSocial: 'manolo',
    nCliente: 768492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'entregado',
    prioridad: 2,
    fecha: '12/02/2020',
    color: 'blue',
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'cancelado',
    prioridad: 2,
    fecha: '12/02/2020',
    color: '#A93226',
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'pendiente',
    prioridad: 2,
    fecha: '12/02/2020',
    color: 'yellow',
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'pendiente',
    prioridad: 2,
    fecha: '12/02/2020',
    color: 'yellow',
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'entregado',
    prioridad: 2,
    fecha: '12/02/2020',
    color: 'blue',
  },
];

const ListadoDePedidos = () => {
  const [valueSearch, setValueSearch] = React.useState('');

  return (
    <View>
      <Actualizacion />
      <Buscador value={valueSearch} setValue={setValueSearch} />
      <ScrollView>
        {clientes
          .filter((e) => e.estado.includes(valueSearch.toLowerCase()))
          .map((cliente, i) => (
            <Card key={i} cliente={cliente} />
          ))}
      </ScrollView>
    </View>
  );
};

export default ListadoDePedidos;
