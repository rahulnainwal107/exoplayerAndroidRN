/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  NativeModules,
} from 'react-native';
import CacheInterface from './CacheVideoModule';
import Video from 'react-native-video';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onPress = () => {
    // console.log('We will invoke the native module here!');
    // CacheInterface.createCacheVideoModule('testName', 'testLocation');
    CacheInterface.downloadVideoUsingUri(
      'https://z5vodnews.akamaized.net/Transcoded_Content/News/Vod/Times_Now_Navbharat/1496ku9g6g/1x/81/ij/1x81ij39ou/dda32ec8_F20_720p_1500/dda32ec8_F20_720p_1500/index.m3u8',
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Video
        source={{
          uri: 'https://z5vodnews.akamaized.net/Transcoded_Content/News/Vod/Times_Now_Navbharat/1496ku9g6g/1x/81/ij/1x81ij39ou/dda32ec8_F20_720p_1500/dda32ec8_F20_720p_1500/index.m3u8',
        }} // Can be a URL or a local file.
        controls={true}
        // ref={ref => {
        //   this.player = ref;
        // }} // Store reference
        // onBuffer={this.onBuffer} // Callback when remote video is buffering
        // onError={this.videoError} // Callback when video cannot be loaded
        style={styles.backgroundVideo}
        videoOptions={{title: 'RN Test'}}
      />
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 25,
            //width: 25,
            backgroundColor: 'green',
            alignItems: 'center',
          }}
          viewId={123}
          onPress={onPress}>
          <Text style={{color: 'white'}}>Download video using URI</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            height: 25,
            //width: 25,
            backgroundColor: 'green',
            alignItems: 'center',
          }}
          onPress={onPress}>
          <Text style={{color: 'white'}}>Play Offline Video</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

var styles = StyleSheet.create({
  backgroundVideo: {
    height: 200,
  },
});

export default App;
