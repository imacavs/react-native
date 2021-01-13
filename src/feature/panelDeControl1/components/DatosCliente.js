import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'white',
    margin: 10,
    flex: 1,
  },
  datos: {
    display: 'flex',
    flexDirection: 'row',
  },
  number: {
    flex: 1,
    fontSize: 60,
    marginLeft: 5,
  },
  verMas: {
    flex: 1,
    alignSelf: 'flex-end',
    color: 'gray',
    paddingBottom: 16,
  },
  title: {
    color: 'gray',
    fontWeight: 'bold',
  },
  icon: {
    // flex: 1,
    display: 'flex',
    alignSelf: 'flex-end',
    marginRight: 5,
    marginBottom: 12,
    fontSize: 30,
  },
});

const DatosCliente = ({number, title}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.datos}>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.verMas}>Ver mas</Text>
        {/* <Icon
          name="rightcircle"
          size={30}
          color="#A93226"
          style={styles.icon}
        /> */}
      </View>
    </View>
  );
};

export default DatosCliente;
