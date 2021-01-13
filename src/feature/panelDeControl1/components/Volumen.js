import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 35,
    backgroundColor: '#F8F9F9',
    padding: 20,
  },
  title1: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 18,
  },
  containerGrafico: {
    alignItems: 'center',
    marginLeft: 10,
  },
  numberRed: {
    fontSize: 32,
    color: '#A93226',
  },
  numberGray: {
    fontSize: 24,
    color: '#A6ACAF',
    display: 'flex',
    alignSelf: 'flex-end',
    paddingBottom: 3,
  },
  containerGraficoYDatos: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  containerNumbers: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 14,
  },
  flex: {
    flex: 1,
  },
  lineaDivisoria: {
    backgroundColor: 'black',
    height: 6,
  },
  datos: {
    flexDirection: 'row',
  },
  verMas: {
    flex: 1,
    textAlign: 'right',
    color: 'gray',
    paddingBottom: 16,
    marginRight: 10,
  },
  icon: {
    marginRight: 30,
    fontSize: 20,
    flex: 1,
  },
});

const Volumen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title1}>VOLUMEN</Text>
      </View>
      <View style={styles.lineaDivisoria} />
      <View>
        <Text style={styles.title2}>SEPTIEMBRE</Text>
      </View>
      <View style={styles.containerGraficoYDatos}>
        <View style={styles.containerGrafico}>
          <Text>grafico</Text>
        </View>
        <View style={styles.flex}>
          <View style={styles.containerNumbers}>
            <Text style={styles.numberRed}>1554</Text>
            <Text style={styles.numberGray}>/1755</Text>
          </View>
          <View>
            <Text>Toneladas entregadas sobre proyectadas</Text>
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
      </View>
    </View>
  );
};

export default Volumen;
