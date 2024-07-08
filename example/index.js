/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Main = () => (
  <GestureHandlerRootView>
    <App />
  </GestureHandlerRootView>
);
AppRegistry.registerComponent(appName, () => Main);
