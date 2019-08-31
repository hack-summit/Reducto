/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
 
import React from 'react';
import Login from './components/Auth/Login';
import Feed from './components/Feed';
import Detail from './components/Detail';
import { createStackNavigator, 
  createAppContainer, 
  createSwitchNavigator } from 'react-navigation';

const AppStack = createStackNavigator(
  {
    FeedRoute: Feed,
    DetailRoute: Detail
  }
); 

const AuthStack = createStackNavigator(
  {
    LoginRoute: Login
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
