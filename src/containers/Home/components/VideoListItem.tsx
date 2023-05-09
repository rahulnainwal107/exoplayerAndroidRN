import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, Image, ActivityIndicator} from 'react-native';

import CacheInterface from '../../../../CacheVideoModule';

const VideoListItem = ({item, index, navigation}) => {
  const {uri, poster, title} = item;
  const [isDownloaded, setIsDownloaded] = useState(false);

  useEffect(() => {
    getUriForOfflineUse(uri);
  }, []);

  const onPressDownload = (uri: string) => {
    // console.log('We will invoke the native module here!');
    // CacheInterface.createCacheVideoModule('testName', 'testLocation');
    uri && CacheInterface.downloadVideoUsingUri(uri);
  };

  const playVideoOnline = () => {
    navigation.navigate('VideoPlayerScreen', {uri});
  };

  const playVideoOffline = () => {
    CacheInterface.getAbsolutePath(uri);
    navigation.navigate('VideoPlayerScreen', {uri});
  };

  const getUriForOfflineUse = (uri: string) => {
    CacheInterface.isVideoAvailableForOffline(uri)
      .then(isDownloaded => {
        setIsDownloaded(isDownloaded);
        console.log(`Video is downloaded: ${isDownloaded}`);
      })
      .catch(error => {
        console.error(`Error: ${error}`);
      });
  };

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#d3d3d3',
      }}
      onPress={isDownloaded ? playVideoOffline : playVideoOnline}>
      <Image source={{uri: poster}} style={{height: 50, width: 50}} />
      <Text
        style={{
          marginHorizontal: 10,
          fontSize: 18,
          fontWeight: '500',
          flex: 1,
        }}
        numberOfLines={2}>
        {title}
      </Text>
      {true ? (
        <TouchableOpacity
          onPress={
            isDownloaded
              ? getUriForOfflineUse.bind(this, uri)
              : onPressDownload.bind(this, uri)
          }>
          <Image
            source={
              isDownloaded
                ? require('../../../../src/assets/CheckIcon.png')
                : require('../../../../src/assets/Download_Icon.png')
            }
            style={{height: 50, width: 50}}
          />
        </TouchableOpacity>
      ) : (
        <ActivityIndicator size={'small'} style={{height: 50, width: 50}} />
      )}
    </TouchableOpacity>
  );
};

export default VideoListItem;
