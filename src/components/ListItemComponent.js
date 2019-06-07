import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'

export default class ListItemComponent extends PureComponent {


    render() {
        const { item } = this.props;
        return (
            <View style={{flex:1,flexDirection:"column", elevation:2,backgroundColor:"#fff", padding:10}}>
                <Text>{item}</Text>   
            </View>
        )
    }
}
