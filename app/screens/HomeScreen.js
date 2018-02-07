import React, { Component } from 'react';
import {
    StyleSheet,
    ListView,
    View,
    Text,
    Button,
    ActivityIndicator
} from 'react-native';
import Header from '../components/Header';
import { connect } from 'react-redux';
import * as Actions from '../actions/index';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
       return(
          <View>
              <Header />
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text>Home Screen</Text>
              </View>
              <Button
                  title="Welcome Onboard"
                  onPress={() => this.props.navigation.navigate('OnBoard')}
              />
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
// Just by doing this, we will have access to the actions defined in out actions file (action/HomeScreen.js)
function mapDispatchToProps(dispatch) {
    return{}
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

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