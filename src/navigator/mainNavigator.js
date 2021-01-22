import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList1195198Navigator from '../features/ArticleList1195198/navigator';
import ArticleList3195197Navigator from '../features/ArticleList3195197/navigator';
import ArticleList4195196Navigator from '../features/ArticleList4195196/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList1195198: { screen: ArticleList1195198Navigator },
ArticleList3195197: { screen: ArticleList3195197Navigator },
ArticleList4195196: { screen: ArticleList4195196Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
