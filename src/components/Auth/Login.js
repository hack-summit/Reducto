import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

import { styles } from '../../styles/styles.js'

class Login extends Component {
  
  constructor(props){
    super(props);
    this.state = {
    timePassed: false
    };
  }

  componentDidMount() {
    const a = setTimeout( () => {
       this.setTimePassed();
    },3000);
  }
  
  setTimePassed() {
     this.setState({timePassed: true});
  }
  
  render() {

    if (!this.state.timePassed){
      return (
        <View style={styles.login}>
          <Image style={styles.app_logo} source={require('./app_icon.png')}/> 
        </View>
      );
    }else{
      return (
        this.props.navigation.navigate('App')
      );
    }
    }
  }

export default Login;