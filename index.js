import { registerRootComponent } from 'expo';

//import App from './examples/05-Navigation'
//import App from './game/App'
import App from './rest-api/App'


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
