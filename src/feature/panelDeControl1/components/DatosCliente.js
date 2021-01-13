import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    margin: 10,
    flex: 1,
    height: 150,
  },
  datos: {
    flexDirection: 'row',
  },
  containerNumber: {
    flex: 1,
    justifyContent: 'center',
  },
  number: {
    fontSize: 40,
    marginLeft: 5,
    textAlign: 'center',
  },
  verMas: {
    flex: 1,
    textAlign: 'center',
    color: 'gray',
    paddingBottom: 16,
    marginLeft: 45,
  },
  title: {
    color: 'gray',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    marginRight: 30,
    fontSize: 20,
    flex: 1,
  },
});

const DatosCliente = ({number, title}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.containerNumber}>
        <Text style={styles.number}>{number}</Text>
      </View>
      <View style={styles.datos}>
        <Text style={styles.verMas}>Ver mas</Text>
        <View>
          <Icon
            name="rightcircle"
            size={30}
            color="#A93226"
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  );
};

export default DatosCliente;
