/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 
import React from 'react';
import Login from './components/Auth/Login';
import Feed from './components/HomePage';
import Detail from './components/Detail';
import { createStackNavigator, 
  createAppContainer, 
  createSwitchNavigator,
  createDrawerNavigator } from 'react-navigation';

import {Image, TouchableOpacity} from 'react-native';

import Screen1 from './components/DrawerScreens/Analyse';
import Screen2 from './components/DrawerScreens/Navigate';
import Screen3 from './components/DrawerScreens/Opinion';


const AuthStack = createStackNavigator(
  {
    LoginRoute: Login
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const DrawerItems = createDrawerNavigator(
  {
    Home: {
      screen: Feed
    },
    Analyse: {
      screen: Screen1
    },
    Navigate: {
      screen: Screen2
    },
    Opinion: {
      screen: Screen3
    }
  }
);

const DrawerStackNavigator = createStackNavigator({
  DrawerRoute: {
    screen : DrawerItems
  }
},
  {
    defaultNavigationOptions:({navigation}) => ({
      headerStyle: {
        backgroundColor: '#1C2C3B',
      },
      title: navigation.state.routes[navigation.state.index].routeName,
      headerTintColor: '#fff',
      headerLeft: (
        <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
          <Image source={require('../assets/img/menu.png')}
          style={
            {
              marginLeft: 12,
              tintColor: '#fff'
            }
          }/>
        </TouchableOpacity>
      )
    })
  }
);

const AppStack = createStackNavigator(
  {
    DrawerRoute: {
      screen: DrawerStackNavigator,
      navigationOptions:{
        header: null
      }
    },
    DetailRoute: Detail
  }
); 

export default createAppContainer(
  createSwitchNavigator({
     Auth: AuthStack,
     App: AppStack
  }
));

// const App = () => {
//   return (
//     <Login />
//   );
// };

// export default App;
