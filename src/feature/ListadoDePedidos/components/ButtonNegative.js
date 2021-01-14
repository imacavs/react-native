import * as React from 'react';
import {Button} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
import IconDislike from 'react-native-vector-icons/SimpleLineIcons';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  icon: {
    marginRight: 10,
  },
  container: {
    color: '#A93226',
    fontSize: 14,
  },
});

const ButtonNegative = () => (
  <View>
    {/* <Button title="CALIFICARLO NEGATIVAMENTE" type="clear" color="red" /> */}
    <Button
      icon={
        <IconDislike
          name="dislike"
          size={16}
          color="#A93226"
          style={styles.icon}
        />
      }
      type="clear"
      titleStyle={styles.container}
      title="calificar negativamente"
    />
  </View>
);

export default ButtonNegative;
