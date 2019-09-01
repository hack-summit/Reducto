import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/styles.js'

class Opinion extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Opinion Screen</Text>
      </View>
    );
  }
}

export default Opinion;