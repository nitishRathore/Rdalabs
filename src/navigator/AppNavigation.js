import { createStackNavigator, createAppContainer } from "react-navigation";

import ListScreen from "../containers/ListScreenContainer";
import DetailsScreen from "../containers/DetailScreenContainer";

const mainNavigation = createStackNavigator(
  {
    List: {
      screen: ListScreen
    },
    Detail: {
      screen: DetailsScreen
    }
  },    
  {

    initialRouteName: "List",
    headerMode: "none",
  }
);

const AppContainer = createAppContainer(mainNavigation);

export default AppContainer;
