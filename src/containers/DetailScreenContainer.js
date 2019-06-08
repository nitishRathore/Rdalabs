import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Details from '../components/DetailScreenComponent';
import Header from '../components/HeaderComponent';
import AppStyles from '../utils/AppStyles';

export default class DetailScreenContainer extends Component {

    constructor(){
        super();
        this.state = {
            brewery:""
        }
    }

    componentDidMount =() =>{

        this.setState({
            brewery : this.props.navigation.getParam('item')
        })
    }


    render() {
        const {  ...rest } = this.state;
        const { ...props} = this.props;
        return (
            <View style={AppStyles.container}>  
                <Header  {...props} title="Details"/>
                <Details  {...rest}/>
            </View>
        )
    }
}
