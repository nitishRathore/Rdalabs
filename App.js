import React, { Component, createContext } from "react";
import { SafeAreaView } from "react-native";
import AppContainer from "./src/navigator/AppNavigation";
import AppStyles from "./src/utils/AppStyles";
import Permissions from "react-native-permissions";
import * as GetCurrentLocation from "./src/utils/CurrentLocation";

export const LocationContext = React.createContext("no location");
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      locationPermission: false,
      currentLatLng: ""
    };
  }

  componentDidMount = () => {
    Permissions.request("location", { type: "always" }).then(response => {
       if (response == "authorized") {
        this.getCurrentLocation();
      }
    });
  };

  getCurrentLocation = () => {
    GetCurrentLocation.CurrentLocation().then(locationData => {
      if (locationData.error == null) {
       this.setState({
          currentLatLng:locationData
        })
      }
    });
  };

  render() {
    return (
      <SafeAreaView style={AppStyles.container}>
        <LocationContext.Provider value={this.state.currentLatLng}>
          <AppContainer />
        </LocationContext.Provider>
      </SafeAreaView>
    );
  }
}
