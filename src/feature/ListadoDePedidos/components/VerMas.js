import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    color: 'gray',
  },
  icon: {
    paddingTop: 18,
  },
});

const VerMas = () => {
  return (
    <View style={styles.container}>
      <Icon name="rightcircle" size={30} color="#A93226" style={styles.icon} />
      <Text style={styles.text}>Ver Mas</Text>
    </View>
  );
};

export default VerMas;
