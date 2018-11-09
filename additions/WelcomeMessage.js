import React, { Component } from "react";
import { StyleSheet, Image, View } from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text
} from "native-base";

class WelcomeMessage extends Component {
  render() {
    return (
      <View style={styles.app}>
      <Container style={styles.container}>
        <View style={styles.image}>
        <Image
          source={require('../Images/2018_wall-decor_banner.jpg')} />
        </View>
      </Container>
        <View style={styles.welcomeTextTop}>
        <Text>Welcome to Nail'd It!</Text>
        </View>
        <View style={styles.welcomeTextBottom}>
        <Text>To get started, please log in or sign up below: </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 0, 
    alignSelf: 'stretch',
    height: 800,
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    alignSelf: 'stretch',
    textAlign: 'center',
    backgroundColor: "#FFF", 
    height: 100,
  }, 
  image: {
    flex: 2, 
    width: 100,
  }, 
  welcomeTextTop: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 0,
    color: 'white'
  },
  welcomeTextBottom: {
    flex: 4,
    alignItems: 'center',
    color: 'white'
  }
});

export default WelcomeMessage;