import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Colors from "../utils/Colors";
import { NavigationActions } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import AppStyles from "../utils/AppStyles";

export default class HeaderComponent extends Component {
    
  searchFilterFunction = text => {
    const { searchFilter } = this.props;
    searchFilter(text);
  };

  navigateBack = () => {
    this.props.navigation.dispatch(NavigationActions.back());
  };

  render() {
    const { title } = this.props;
    return (
      <View style={AppStyles.headerBackground}>
        {title == null ? (
          <TextInput
            autoFocus={false}
            selectionColor={Colors.orange}
            placeholder={"Search"}
            style={AppStyles.searchBar}
            onChangeText={text => this.searchFilterFunction(text)}
          />
        ) : (
          <View style={AppStyles.normalHeader}>
            <TouchableOpacity onPress={() => this.navigateBack()}>
              <Icon
                name="ios-arrow-back"
                size={32}
                color={Colors.white}
                style={AppStyles.backIcon}
              />
            </TouchableOpacity>

            <Text style={AppStyles.headerTitleText}>{title}</Text>
          </View>
        )}
      </View>
    );
  }
}
