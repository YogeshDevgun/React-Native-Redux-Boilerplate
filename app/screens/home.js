import React, { Component } from 'react';
import {
    StyleSheet,
    ListView,
    View,
    Text,
    ActivityIndicator
} from 'react-native';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions/index';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
       return(
           <View style={{flex: 1, backgroundColor: '#F5F5F5', paddingTop: 20}}>
               <Text>Welcome DwellBeing Native</Text>
           </View>
       )
    }
};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {}
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
    return{}
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);

var styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        // height: 50,
        padding: 10
    },

    title:{
        fontSize: 15,
        fontWeight: "600"
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    }
});