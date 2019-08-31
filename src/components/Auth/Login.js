import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from '../../styles/styles.js'

class Login extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Testing with Sai</Text>
        <Button title='Login'
        onPress={() => this.props.navigation.navigate('FeedRoute')} />
      </View>
    );
  }
}

export default Login;