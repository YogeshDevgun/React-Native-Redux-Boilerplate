import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './config/store'; //Import the store
import HomeScreen from './screens/HomeScreen'
import {StackNavigator} from "react-navigation";
import OnBoardingScreen from "./screens/OnBoardingScreen"; //Import the component file

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        OnBoard: {
            screen: OnBoardingScreen,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
               <RootStack/>
            </Provider>
        );
    }
}

