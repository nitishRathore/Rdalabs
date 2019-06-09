import React, { Component } from "react";
import { Text, View } from "react-native";
import List from "../components/ListScreenComponent";
import Header from "../components/HeaderComponent";
import { Api,getBreweries } from "../api/client/ApiClient";
import AppStyles from "../utils/AppStyles";
import LocationProvider from "../provider/LocationProvider";

export default class ListScreenContainer extends Component {
  constructor() {
    super();
    this.state = {
      listData: [],
      isLoading: false
    };
    this.page = 0;
  }

  fetchfromServer = () => {
    this.page = this.page + 1;
    this.setState({ isLoading: true }, () => {
      getBreweries(this.page).then((data) =>{
        this.setState(
          {
            listData: [...this.state.listData, ...data],
            isLoading: false
          },
          () => {
            this.arrayholder = this.state.listData;
          }
        );
      }) 
    });
  };


  

  componentDidMount() {
    this.fetchfromServer();
  }

  filterList = filterText => {
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toLowerCase()}`;

      const textData = filterText.toLowerCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({ listData: newData });
  };

  showDetailScreen = item => {
    const { navigate } = this.props.navigation;
    navigate("Detail", {
      item: item
    });
  };
  render() {
    const { ...rest } = this.state;
    return (
      //
      <View style={AppStyles.container}>
        <Header searchFilter={this.filterList} />
        <LocationProvider.Consumer>
          {data => ( 
            <View style={AppStyles.locationView}>
              <Text style={AppStyles.locationlabel}>
                Current Location
              </Text> 
              <Text style={AppStyles.locationlabel}>Latitude: {data.lat}</Text>
              <Text style={AppStyles.locationlabel}>Longitude: {data.lon}</Text>
            </View>
          )}
        </LocationProvider.Consumer>
        <List
          {...rest}
          loadMore={this.fetchfromServer}
          itemClicked={this.showDetailScreen}
        />
      </View>
      //
    );
  }
}
