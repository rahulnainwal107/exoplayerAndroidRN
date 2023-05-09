import React from 'react';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';

const VideoPlayerScreen = ({route}) => {
  const {uri} = route.params;
  return (
    <View>
      <Video
        source={{
          //uri: 'file:////storage/emulated/0/Android/data/com.exoplaypoc/files/downloads/Doctor_Strange_in_the_Multiverse_of_Madness_Official_Trailer/default.m3u8',
          uri: uri,
        }} // Can be a URL or a local file.
        controls={true}
        resizeMode="contain"
        // ref={ref => {
        //   this.player = ref;
        // }} // Store reference
        // onBuffer={this.onBuffer} // Callback when remote video is buffering
        // onError={this.videoError} // Callback when video cannot be loaded
        style={styles.backgroundVideo}
        onError={error => console.log('Error:', error)}
      />
    </View>
  );
};

export default VideoPlayerScreen;

var styles = StyleSheet.create({
  backgroundVideo: {
    height: 200,
    width: '100%',
  },
});
