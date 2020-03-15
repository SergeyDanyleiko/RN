import { FSApp, FSAppTypes } from '@brandingbrand/fsapp';
import screens from './screens';
import reducers from './reducers';

const projectEnv = require('../env/env');

const appConfig: FSAppTypes.AppConfigType = {
  packageJson: require('../package.json'),
  appType: 'singleScreen',
  screen: { screen: 'HOME', title: 'Pirate Ship' },
  screens,
  reducers,
  env: projectEnv,
  drawer: {
    left: {
      screen: 'LeftDrawerMenu'
    },
    disableOpenGesture: false
  },
  webRouterType: 'hash'
};

const app = new FSApp(appConfig);
export default app;
