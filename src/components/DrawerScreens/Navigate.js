import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/styles.js'

class Navigate extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Navigate Screen</Text>
      </View>
    );
  }
}

export default Navigate;