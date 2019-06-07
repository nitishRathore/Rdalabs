import React, { PureComponent } from 'react'
import { Text, View , Dimensions,TextInput} from 'react-native'
import Colors from '../utils/Colors'
const APPBAR_HEIGHT = 60;


export default class HeaderComponent extends PureComponent {

    searchFilterFunction =(text) => {
        const {searchFilter} = this.props;
        searchFilter(text);
    }
    render() {
        return (
            <View style={{backgroundColor:Colors.white,height:APPBAR_HEIGHT,justifyContent:"center",alignContent:"center"}}> 
                {/* <TextInput
                    autoFocus={false} 
                    selectionColor={Colors.orange}
                    style={{ marginHorizontal: "5%", backgroundColor: Colors.white, padding: 10, marginVertical: 10, borderWidth: 0.2, borderColor: Colors.light_gray, color: Colors.orange }}
                    onChangeText={text => this.searchFilterFunction(text)}
                /> */}
                <Text style={{color:Colors.orange,fontSize:18,fontWeight:"bold", textAlign:"center"}}>DummyList</Text>

            </View>   
        )
    }
}
