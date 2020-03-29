import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import RepositoryUser from './pages/RepositoryUser';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
      RepositoryUser,
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
