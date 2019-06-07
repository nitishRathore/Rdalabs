import React, { Component } from "react";
import { Text, View, FlatList, TextInput } from "react-native";
import ListItem from "./ListItemComponent";
import Colors from "../utils/Colors";

export default class ListScreenComponent extends Component {

    constructor() {
        super();
        this.state = {
            data : []  
        }
    }

  componentDidMount = () => {
    this.setState({
      data: this.props.listData
    });
  };

  searchFilterFunction = text => {
    this.arrayholder = this.props.listData;

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.toLowerCase()}`;

      const textData = text.toLowerCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({ data: newData });
  };

  _keyExtractor = (item, index) => index;
  
  renderListItem = ({ item }) => {
    return <ListItem item={item} />;
  };
  renderItemSeparator = () => {
    return <View style={{ backgroundColor: "#FFF", marginVertical: 5 }} />;
  };

  render() {
    const { listData } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          autoFocus={false}
          selectionColor={Colors.orange}
          style={{
            marginHorizontal: "5%",
            backgroundColor: Colors.white,
            padding: 10,
            marginVertical: 10,
            borderWidth: 0.2,
            borderColor: Colors.light_gray,
            color: Colors.orange
          }}
          onChangeText={text => this.searchFilterFunction(text)}
        />
        <FlatList  
          data={this.state.data}
          renderItem={this.renderListItem}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={this.renderItemSeparator}
        />
      </View>
    );
  }
}
