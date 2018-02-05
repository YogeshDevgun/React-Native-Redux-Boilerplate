import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './config/store'; //Import the store
import Home from './screens/home' //Import the component file

export default class DwellNative extends Component {
    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        );
    }
}