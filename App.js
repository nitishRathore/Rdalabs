import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import AppContainer from "./src/navigator/AppNavigation";
import AppStyles from './src/utils/AppStyles'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={AppStyles.container}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}
