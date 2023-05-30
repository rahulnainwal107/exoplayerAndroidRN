/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {restorePersistenceManager} from 'react-native-video';

import Initial from './src/navigations/Initial';
import store from './src/store';

function App(): JSX.Element {
  useEffect(() => {
    if (Platform.OS === 'ios') restorePersistenceManager?.();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Initial />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
