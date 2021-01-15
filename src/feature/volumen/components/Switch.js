import {View} from 'native-base';
import React from 'react';
import SwitchSelector from 'react-native-switch-selector';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    // flex: 1,
  },
});

const Switch = () => {
  return (
    <View styles={styles.container}>
      <SwitchSelector
        initial={0}
        onPress={() => console.log('hola')}
        textColor={'gray'}
        selectedColor={'white'}
        buttonColor={'#A93226'}
        borderColor={'gray'}
        borderRadius={12}
        hasPadding
        options={[
          {label: 'DIARIO', value: 'd'},
          {label: 'MENSUAL', value: 'm'},
        ]}
      />
    </View>
  );
};

export default Switch;
