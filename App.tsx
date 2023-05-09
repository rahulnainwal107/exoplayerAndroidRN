/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Initial from './src/navigations/Initial';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Initial />
    </NavigationContainer>
  );
}

export default App;
