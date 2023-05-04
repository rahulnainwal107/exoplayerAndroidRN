import {NativeModules} from 'react-native';
const {CacheVideoModule} = NativeModules;

interface CacheInterface {
  createCacheVideoModule(name: string, location: string): void;
}

export default CacheVideoModule as CacheInterface;
