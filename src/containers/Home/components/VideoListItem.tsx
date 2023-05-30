import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, Image, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  downloadVideoUsingUri,
  isVideoAvailableForOffline,
} from 'react-native-video';

//import CacheInterface from '../../../../CacheVideoModule';
import {addForDownload} from '../../../store/reducers';

const VideoListItem = ({item, index, navigation}) => {
  const {uri, poster, title} = item;
  const [isDownloaded, setIsDownloaded] = useState(false);
  const dispatch = useDispatch();
  const download = useSelector(state => state.download);
  console.log('download ', download);
  useEffect(() => {
    getUriForOfflineUse(uri);
  }, []);

  const onPressDownload = (uri: string) => {
    // console.log('We will invoke the native module here!');
    // CacheInterface.createCacheVideoModule('testName', 'testLocation');
    if (uri) {
      const data = {
        id: uri,
        uri: uri,
        isQueued: true,
        isDownloadCompleted: false,
      };
      downloadVideoUsingUri(uri);
      dispatch(addForDownload(data));
    }
  };

  const playVideoOnline = () => {
    navigation.navigate('VideoPlayerScreen', {uri, offlinePlay: isDownloaded});
  };

  const playVideoOffline = () => {
    //CacheInterface.getAbsolutePath(uri);
    navigation.navigate('VideoPlayerScreen', {uri, offlinePlay: isDownloaded});
  };

  const getUriForOfflineUse = (uri: string) => {
    isVideoAvailableForOffline(uri)
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
