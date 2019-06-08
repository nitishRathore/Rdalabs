import React, { PureComponent } from "react";
import { Text, TouchableOpacity } from "react-native";
import AppStyles from "../utils/AppStyles";

export default class ListItemComponent extends PureComponent {
  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity
        style={AppStyles.listItem}  
        onPress={() => this.props.onClick(item)}
      >
        <Text
          style={AppStyles.listNameText}
        >
          {item.name}
        </Text>
        <Text style={AppStyles.listTypeText}>
          {item.brewery_type}
        </Text>
      </TouchableOpacity>
    );
  }
}
