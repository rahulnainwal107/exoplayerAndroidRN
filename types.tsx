import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type InitialNavigationPros = {
  Home: undefined;
  VideoPlayerScreen: {uri: string};
};

export type HomeProps = NativeStackScreenProps<InitialNavigationPros, 'Home'>;

export type VideoPlayerScreenProps = NativeStackScreenProps<
  InitialNavigationPros,
  'VideoPlayerScreen'
>;

export type VideoItemProps = {
  title: string;
  uri: string;
  poster: string;
};

export type VideoItemsProps = VideoItemProps[];
