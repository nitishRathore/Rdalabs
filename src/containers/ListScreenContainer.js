import React, { Component } from "react";
import { Text, View } from "react-native";
import List from "../components/ListScreenComponent";
import Header from "../components/HeaderComponent";
import {Api} from '../api/client/ApiClient';
import AppStyles from '../utils/AppStyles';
import { LocationContext} from '../../App';

export default class ListScreenContainer extends Component {

    constructor(){
        super();
        this.state = {
            listData : [] ,
            isLoading:false 
        }
        this.page = 0
    }


    getBreweries = () => {
         this.page = this.page+1;
         this.setState({isLoading:true},() =>{
          Api.get('/breweries',{page:this.page,per_page:50}).then(response => 
        
            response.data ).then(response =>{
              this.setState({
                listData:[ ...this.state.listData,...response],
                isLoading:false
              },() =>{
                this.arrayholder = this.state.listData
              })
            });
         })
        
    }  
     
     
    componentDidMount() {

      this.getBreweries();
      
    }

  filterList = (filterText) => {

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toLowerCase()}`;
  
      const textData = filterText.toLowerCase();
          
      return itemData.indexOf(textData) > -1;
    });

    this.setState({ listData: newData }); 

  };

  showDetailScreen = (item) =>{
    const { navigate } = this.props.navigation;
    navigate('Detail',{
      item:item  
    })
  }
  render() {
      const { ...rest } = this.state;
    return (
      // 
      <View style={AppStyles.container}>  
        <Header searchFilter={this.filterList}/>
        <LocationContext.Consumer> 
        { (data) => (
          <Text>Current Location {data.lat} , {data.lon}</Text>
        )}
        </LocationContext.Consumer>
        <List  {...rest} loadMore={this.getBreweries} itemClicked={this.showDetailScreen}/>
       
      </View>
      // 
    );
  }
}
