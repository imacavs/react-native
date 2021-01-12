import React from 'react';
import {Footer, FooterTab, Button, Icon, Text} from 'native-base';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  FooterTab: {
    backgroundColor: '#C0392B',
  },
});

const FooterApp = () => {
  return (
    <Footer>
      <FooterTab style={styles.FooterTab}>
        <Button vertical>
          <Icon name="apps" />
          <Text>.</Text>
        </Button>
        <Button vertical>
          <Icon name="camera" />
          <Text>.</Text>
        </Button>
        <Button vertical>
          <Icon name="navigate" />
          <Text>.</Text>
        </Button>
        <Button vertical>
          <Icon name="person" />
          <Text>.</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default FooterApp;
