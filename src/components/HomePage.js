import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from '../styles/styles.js';

class Feed extends Component {
  render() {
    return (
      <Text>Feed with Navigation Drawer</Text>
    );
  }
}

export default Feed;

{/* <View style={styles.center}>
        <Text>Feed with Navigation Drawer</Text>
        <Button 
        onPress={() => this.props.navigation.navigate('DetailRoute')}
        title='Feed Item' />
      </View> */}