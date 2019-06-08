import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
} from "react-native";
import ListItem from "./ListItemComponent";
import AppStyles from '../utils/AppStyles';
import Colors from "../utils/Colors";

export default class ListScreenComponent extends Component {
  _keyExtractor = (item, index) => item.id.toString();
  
  onItemClick = (item) =>{  
      this.props.itemClicked(item);
  }

  renderListItem = ({ item }) => {
    return <ListItem item={item} onClick={this.onItemClick} />;
  };
  renderItemSeparator = () => {
    return <View style={AppStyles.viewSeparator} />;  
  };

  renderListEmptyComponent = () => {  
    return (
      <View style ={AppStyles.emptyView}>  
        <Text style={AppStyles.emptyText}>Sorry no data available right now</Text>
      </View>
    )
  }


  render() {
    const { listData } = this.props;
    return (
      <View style={AppStyles.container}>
        <FlatList
          data={listData}  
          renderItem={this.renderListItem}
          ListEmptyComponent={this.renderListEmptyComponent}
          keyExtractor={this._keyExtractor} 
          ItemSeparatorComponent={this.renderItemSeparator}
          onEndReached={() => this.props.loadMore()}  
          onEndReachedThreshold={0.01}
          style={AppStyles.list}
        />
      </View>
    );
  }
}
