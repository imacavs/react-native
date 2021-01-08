import {View} from 'native-base';
import React from 'react';
import SwitchSelector from 'react-native-switch-selector';

const Switch = ({setValueSwitch}) => {
  const options = [
    {label: 'menor prioridad', value: 'menor'},
    {label: 'mayor prioridad', value: 'mayor'},
  ];
  return (
    <View>
      <SwitchSelector
        options={options}
        initial={0}
        onPress={(val) => setValueSwitch(val)}
      />
    </View>
  );
};

export default Switch;
