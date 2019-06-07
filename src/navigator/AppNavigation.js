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
    headerMode: "none",
    initialRouteName: "List"
  }
);

const AppContainer = createAppContainer(mainNavigation);

export default AppContainer;
