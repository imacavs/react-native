import React, {useState} from 'react';
import {CheckBox, View, Text} from 'native-base';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
  CheckBox: {
    flex: 1,
  },
  text: {
    flex: 1,
    marginLeft: 25,
  },
});

const CheckBoxIma = ({tag}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <View>
      <View style={styles.container}>
        <View>
          <CheckBox checked={checked} onPress={handleChange} />
        </View>
        <View style={styles.text}>
          <Text onPress={handleChange}>{tag}</Text>
        </View>
      </View>
    </View>
  );
};

export default CheckBoxIma;
