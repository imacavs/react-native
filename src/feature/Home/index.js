import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  padreItemText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 8,
  },
  itemDatoText: {
    fontSize: 14,
    color: '#939598',
  },
  card: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 18,
    marginTop: 30,
  },
  padreCirculo: {
    width: 40,
  },
  circulo: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
    borderRadius: 10,
  },
  verPedido: {
    color: 'blue',
    fontSize: 14,
  },
  verPedidoPadre: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    margin: 8,
  },
  prueba: {
    backgroundColor: 'white',
    height: 117,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 10,
  },
  dislike: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  respuestaDatosPadre: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  respuestaDatoText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  lineaDivisoria: {
    backgroundColor: 'black',
    height: 1.5,
  },
});

const ListaDePedidos = () => {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.itemText}>
          <View style={styles.padreCirculo}>
            <View style={styles.circulo} />
          </View>
          <View style={styles.padreItemText}>
            <Text style={styles.itemDatoText}>N* Pedido:</Text>
            <Text style={styles.itemDatoText}>Estado:</Text>
            <Text style={styles.itemDatoText}>Fecha:</Text>
          </View>
          <View style={styles.respuestaDatosPadre}>
            <Text style={styles.respuestaDatoText}>9288822</Text>
            <Text style={styles.respuestaDatoText}>Pendiente</Text>
            <Text style={styles.respuestaDatoText}>12/02/2020</Text>
          </View>
          <View style={styles.dislike}>
            <Text>dislike</Text>
          </View>
        </View>
        <View style={styles.lineaDivisoria} />
        <View style={styles.verPedidoPadre}>
          <Text style={styles.verPedido}>Ver pedido</Text>
        </View>
      </View>
    </>
  );
};
export default ListaDePedidos;
