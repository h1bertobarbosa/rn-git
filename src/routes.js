import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#007fff',
        },
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
      },
    }
  )
);

export default Routes;
