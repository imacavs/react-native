import React from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import IconHouse from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconSearch from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  footer: {
    borderRadius: 35,
    height: 75,
    backgroundColor: 'transparent',
  },
  FooterTab: {
    backgroundColor: '#A93226',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  gray: {
    color: '#A6ACAF',
  },
  backgroundColor: {
    backgroundColor: '#A93226',
  },
});

const FooterPanelDeControl = () => {
  return (
    <Footer style={styles.footer}>
      <FooterTab style={styles.FooterTab}>
        <Button vertical style={styles.footer}>
          <IconHouse name="home" size={30} color="#A6ACAF" />
          {/* <Icon name="apps" style={styles.gray} /> */}
        </Button>
        <Button vertical>
          <IconFeather name="trello" size={30} color="#A6ACAF" />
          {/* <Icon name="camera" style={styles.gray} /> */}
        </Button>
        <Button vertical active style={styles.backgroundColor}>
          <IconFeather name="bar-chart-2" size={30} color="white" />
          {/* <Icon active name="navigate" /> */}
          <Text>.</Text>
        </Button>
        <Button vertical>
          <IconSearch name="setting" size={30} color="#A6ACAF" />
          {/* <Icon name="person" style={styles.gray} /> */}
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default FooterPanelDeControl;
