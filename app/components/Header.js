import React, {Component} from 'react';
import {StyleSheet,
        View,
        Text } from 'react-native';
import {connect} from 'react-redux';

class Header extends Component {

    render(){
        return(
            <View>
                <Text>Hi I am header.</Text>
            </View>
        )
    }
}


function mapStateToProps(state, props){
    return {

    }
}

function mapDispatchToProps(dispatch){
    return{

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);