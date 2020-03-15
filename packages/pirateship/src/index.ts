import screens from './screens';
import reducers from './reducers';
import {FSApp, FSAppTypes} from "@brandingbrand/fsapp";

const projectEnv = require('../env/env');

const appConfig: FSAppTypes.AppConfigType = {
  packageJson: require('../package.json'),
  screens,
  reducers,
  env: projectEnv,
  appType: 'singleScreen',
  screen: {
    screen: 'Home',
    title: 'MOVIES'
  },
  popToRootOnTabPressAndroid: true,
  devMenuScreens: [{screen: 'Development'}]
};

const app: FSApp = new FSApp(appConfig);

export default app;
