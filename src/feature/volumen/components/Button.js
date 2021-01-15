import React from 'react';
import {Button, Text} from 'native-base';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
  },
  text2: {
    fontSize: 10,
    color: 'gray',
  },
  container: {
    flexDirection: 'row',
    marginTop: 20,
  },
  containerButton1: {
    flex: 1,
    marginRight: 15,
  },
  containerButton2: {
    flex: 1,
  },
  containerButton3: {
    flex: 1,
    marginLeft: 15,
  },
  buton1: {
    // backgroundColor: '#F6DDCC',
    height: 25,
    borderRadius: 18,
  },
  buton2: {
    backgroundColor: '#A93226',
    height: 25,
    borderRadius: 18,
  },
  buton3: {
    backgroundColor: '#F6DDCC',
    height: 25,
    borderRadius: 18,
  },
  flex: {
    flex: 1,
  },
});

const Buttons = ({name}) => {
  const [enabled, setEnabled] = React.useState(false);
  // const [textColor, setTextColor] = React.useState(false);

  // const presionado = [setColor('#A93226'), setTextColor('white')];
  // const sinPresionar = [setColor('#F6DDCC'), setTextColor('gray')];

  return (
    <View style={styles.container}>
      <View style={styles.containerButton1}>
        <Button
          full
          // style={styles.buton1}
          style={{
            backgroundColor: enabled ? '#A93226' : '#F6DDCC',
            height: 25,
            borderRadius: 18,
          }}
          onPress={() => {
            // setColor('#A93226');
            // setTextColor('white');
            setEnabled((prevEnabled) => !prevEnabled);
            // setTextColor(!textColor);
          }}>
          <Text style={{fontSize: 10, color: enabled ? 'white' : 'gray'}}>
            {name}
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default Buttons;
