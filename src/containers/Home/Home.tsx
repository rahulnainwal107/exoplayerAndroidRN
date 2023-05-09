import React from 'react';
import {FlatList} from 'react-native';

import {VideoItemsProps} from '../../../types';
import VideoListItem from './components/VideoListItem';

const data: VideoItemsProps = [
  {
    title: 'I Still Believe',
    uri: 'https://d14nfbmksdrc0w.cloudfront.net/AFTERSUN_Official_Trailer/default.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: 'DEAD FOR A DOLLAR',
    uri: 'https://d14nfbmksdrc0w.cloudfront.net/Disenchanted_2022_Official_Trailer/default.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: 'A Holiday Chance 2021',
    uri: 'https://d14nfbmksdrc0w.cloudfront.net/Doctor_Strange_in_the_Multiverse_of_Madness_Official_Trailer/default.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: 'April Rain 2014',
    uri: 'https://d14nfbmksdrc0w.cloudfront.net/A_Holiday_Chance__2021_/default.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: 'SHARPER',
    uri: 'https://d14nfbmksdrc0w.cloudfront.net/Bros_Official_Trailer/default.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: '1899',
    uri: 'https://d14nfbmksdrc0w.cloudfront.net/RUBIKON_Official_Trailer_2022_/default.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: 'Requested Content Not Available',
    uri: 'https://d14nfbmksdrc0w.cloudfront.net/He_s_All_That_Addison_Rae_Tanner_Buchanan_Official_Trailer/default.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: 'Connect With Us',
    uri: 'https://d14nfbmksdrc0w.cloudfront.net/Werewolf_By_Night_Official_Trailer/default.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: 'TO THE NEW Pvt. Ltd.',
    uri: 'https://d14nfbmksdrc0w.cloudfront.net/ANNABELLE_COMES_HOME___Official_Trailer/default.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: 'Asia Square Tower 2, #11-01, Singapore - 018961',
    uri: 'https://d14nfbmksdrc0w.cloudfront.net/Emancipation_Official_Trailer/default.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: 'I Still Believe',
    uri: 'https://d14nfbmksdrc0w.cloudfront.net/GHOST_RIDER_2007_Official_Trailer_HD_/default.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: 'Disenchanted 2022',
    uri: 'https://d14nfbmksdrc0w.cloudfront.net/Godzilla_vs_Kong_Official_Trailer/default.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: 'Detective Knight Rogue (2022)',
    uri: 'https://d14nfbmksdrc0w.cloudfront.net/BONES_AND_ALL_Theatrical_Trailer/default.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: 'DEAD FOR A DOLLAR',
    uri: 'https://d14nfbmksdrc0w.cloudfront.net/Becky_Trailer___2020___Trailers/default.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: 'A Holiday Chance 2021',
    uri: 'https://d14nfbmksdrc0w.cloudfront.net/Deadpool__Official_HD_Trailer__2016/default.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: 'April Rain 2014',
    uri: 'https://d14nfbmksdrc0w.cloudfront.net/Extraction___Official_Trailer___Screenplay_by_JOE_RUSSO_Directed_by_SAM_HARGRAVE/default.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: 'I Still Believe',
    uri: 'https://d14nfbmksdrc0w.cloudfront.net/Memory_Trailer_2022_Trailers/default.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: 'Disenchanted 2022',
    uri: '"https://d14nfbmksdrc0w.cloudfront.net/AFTERSUN_Official_Trailer/default.m3u8"',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: 'Pathaan',
    uri: 'https://d14nfbmksdrc0w.cloudfront.net/Happy____Season_1___official_trailer__1__2017_/default.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
  {
    title: 'War',
    uri: 'https://d3qs5drbtnofja.cloudfront.net/video/Want+a+free+ride+to+Jugaadistan+Enjoy+entire+first+episode+for+free+here+and+on+Lionsgate+Play/Want+a+free+ride+to+Jugaadistan+++Enjoy+entire+first+episode+for+free+here+and+on+Lionsgate+Play.m3u8',
    poster:
      'https://hips.hearstapps.com/hmg-prod/images/new-years-movies-index-1640368473.jpg',
  },
];

const Home = ({navigation}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => (
        <VideoListItem item={item} index={index} navigation={navigation} />
      )}
    />
  );
};

export default Home;
