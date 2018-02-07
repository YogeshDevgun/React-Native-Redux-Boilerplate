import React, {Component} from 'react';
import {StyleSheet,
    View,
    Text,
    Button} from 'react-native';
import {connect} from 'react-redux';

class OnBoardingScreen extends Component {

    render(){
        return(
            <View>
                <Text>Welcome onBoard</Text>

                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
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
export default connect(mapStateToProps, mapDispatchToProps)(OnBoardingScreen);