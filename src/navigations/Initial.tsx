import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../containers/Home/Home';
import VideoPlayerScreen from '../containers/VideoPlayerScreen/VideoPlayerScreen';
import {InitialNavigationPros} from '../../types';

const Stack = createNativeStackNavigator<InitialNavigationPros>();

function Initial() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="VideoPlayerScreen" component={VideoPlayerScreen} />
    </Stack.Navigator>
  );
}

export default Initial;
