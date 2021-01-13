import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginTop: 10,
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
    // flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'bold',
    alignSelf: 'center',
    // alignSelf: 'center',
    // flex: 1,
  },
  icon: {
    // alignSelf: 'center',
  },
  containerTitle: {
    // flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  containerVerMas: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  iconButton: {
    marginLeft: 10,
  },
  lineaDivisoria: {
    backgroundColor: '#E5E7E9',
    height: 2.5,
  },
  verMas: {
    color: '#BDC3C7',
  },
  iconTitle: {
    paddingRight: 12,
  },
});

const Card = ({title, icon, iconButton}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.iconTitle}>{icon}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.lineaDivisoria} />
      <View style={styles.containerVerMas}>
        <Text style={styles.verMas}>Ver mas</Text>
        <Text style={styles.iconButton}>{iconButton}</Text>
      </View>
    </View>
  );
};

export default Card;
