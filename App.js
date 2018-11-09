import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Body,
  Left,
  Right,
  Icon
} from "native-base";
import NavFoot from './additions/NavFootLanding';
import NavHead from './additions/NavHead';
import WelcomeMessage from './additions/WelcomeMessage';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <NavHead />
      <WelcomeMessage />
      <NavFoot />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006400',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
