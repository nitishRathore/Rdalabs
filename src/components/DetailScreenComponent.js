//import liraries
import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import AppStyles from "../utils/AppStyles";

// create a component
export default class DetailScreenComponent extends Component {
  render() {
    const { brewery } = this.props;
    return (
      <View style={AppStyles.container}>
        <Image
          source={require("../assets/images/brew.jpg")}
          style={AppStyles.imageView}
          resizeMode={"cover"}
        />

        <View style={AppStyles.tableView}>
          <View style={AppStyles.rowView}>
            <Text style={AppStyles.labelText}>Name : </Text>
            <Text style={AppStyles.itemText}>{brewery.name}</Text>
          </View>

          <View style={AppStyles.rowView}>
            <Text style={AppStyles.labelText}>Brewery Type : </Text>
            <Text style={AppStyles.itemText}>{brewery.brewery_type}</Text>
          </View>

          <View style={AppStyles.rowView}>
            <Text style={AppStyles.labelText}>Street : </Text>
            <Text style={AppStyles.itemText}>{brewery.street}</Text>
          </View>

          <View style={AppStyles.rowView}>
            <Text style={AppStyles.labelText}>City : </Text>
            <Text style={AppStyles.itemText}>{brewery.city}</Text>
          </View>

          <View style={AppStyles.rowView}>
            <Text style={AppStyles.labelText}>State : </Text>
            <Text style={AppStyles.itemText}>{brewery.state}</Text>
          </View>

          <View style={AppStyles.rowView}>
            <Text style={AppStyles.labelText}>Country : </Text>
            <Text style={AppStyles.itemText}>{brewery.country}</Text>
          </View>

          <View style={AppStyles.rowView}>
            <Text style={AppStyles.labelText}>Postal Code : </Text>
            <Text style={AppStyles.itemText}>{brewery.postal_code}</Text>
          </View>
        </View>
      </View>
    );
  }
}
