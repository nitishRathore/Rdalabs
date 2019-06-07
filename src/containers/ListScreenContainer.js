import React, { Component } from "react";
import { Text, View } from "react-native";
import List from "../components/ListScreenComponent";
import Header from "../components/HeaderComponent";
const dummyData = [
    "Dynamic Accounts Consultant",
    "Chief Research Architect",
    "Chief Identity Liaison",
    "Direct Directives Producer",
    "Lead Interactions Director",
    "Dynamic Accounts Consultant",
    "Chief Research Architect",
    "Chief Identity Liaison",
    "Direct Directives Producer",
    "Lead Interactions Director",
    "Dynamic Accounts Consultant",
    "Chief Research Architect",
    "Chief Identity Liaison",
    "Direct Directives Producer",
    "Lead Interactions Director",
    "Dynamic Accounts Consultant",
    "Chief Research Architect",
    "Chief Identity Liaison",
    "Direct Directives Producer",
    "Lead Interactions Director",
    "Dynamic Accounts Consultant",
    "Chief Research Architect",
    "Chief Identity Liaison",
    "Direct Directives Producer",
    "Lead Interactions Director",
    "Dynamic Accounts Consultant",
    "Chief Research Architect",
    "Chief Identity Liaison",
    "Direct Directives Producer",
    "Lead Interactions Director",
    "Dynamic Accounts Consultant",
    "Chief Research Architect",
    "Chief Identity Liaison",
    "Direct Directives Producer",
    "Lead Interactions Director",
    "Dynamic Accounts Consultant",
    "Chief Research Architect",
    "Chief Identity Liaison",
    "Direct Directives Producer",
    "Lead Interactions Director" 
  ];
export default class ListScreenContainer extends Component {

    constructor(){
        super();
        this.state = {
            filterText:"",
            listData : dummyData  
        }
    }

  filterList = filterText => {
    console.log("Search Filter ---->>> ", filterText);  

  };
  render() {
      const { ...rest } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <List  {...rest}/>
      </View>
    );
  }
}
