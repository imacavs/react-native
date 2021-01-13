import {} from 'native-base';
import React from 'react';
import {View, ScrollView} from 'react-native';
import Card from './components/card';
import Actualizacion from './components/Actualizar';

let clientes = [
  {
    razonSocial: 'pepe',
    nCliente: 12492,
    telefono: 1133407414,
    email: 'imanollopezQpepe',
    estado: 'avtivo',
    prioridad: 3,
    saldo: 233,
    exigible: 193,
  },
  {
    razonSocial: 'ceramica San Luis',
    nCliente: 12492,
    telefono: '4234-87809',
    email: 'compras@ceramicasanluid.com',
    estado: 'activo',
    prioridad: 1,
    saldo: 233,
    exigible: 193,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
    saldo: 233,
    exigible: 193,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
    saldo: 233,
    exigible: 193,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
    saldo: 233,
    exigible: 193,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
    saldo: 233,
    exigible: 193,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
    saldo: 233,
    exigible: 193,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
    saldo: 233,
    exigible: 193,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
    saldo: 233,
    exigible: 193,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
    saldo: 233,
    exigible: 193,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
    saldo: 233,
    exigible: 193,
  },
  {
    razonSocial: 'manolo',
    nCliente: 12492,
    telefono: 1160257549,
    email: 'imanollopezQpepe',
    estado: 'desactivo',
    prioridad: 2,
    saldo: 233,
    exigible: 193,
  },
];

const ClienteDeudaPallets = () => {
  return (
    <View>
      <Actualizacion />
      <ScrollView>
        {clientes.map((cliente, i) => (
          <Card key={i} cliente={cliente} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ClienteDeudaPallets;
