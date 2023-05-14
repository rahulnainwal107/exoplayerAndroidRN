import {NativeModules, NativeEventEmitter} from 'react-native';
const {CacheVideoModule} = NativeModules;
const {NativeWritableMap} = NativeModules;

type NativeWritableMap = typeof NativeModules.NativeWritableMap;
interface EventSender {
  sendEvent(eventName: string, params: NativeWritableMap): void;
}

interface CacheInterface {
  createCacheVideoModule(name: string, location: string): void;
  downloadVideoUsingUri(uri: string): void;
  isVideoAvailableForOffline(uri: string): Promise<boolean>;
  getAbsolutePath(uri: string): void;
  downloadEvent(): EventSender;
}

export const downloadManagerEmitter = new NativeEventEmitter(CacheVideoModule);
export default CacheVideoModule as CacheInterface;
