/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
} from 'react-native'
import { Provider } from 'react-redux'

import configureStore from './app/store/configureStore.js'
import App from './app/components/App'

class whattodo extends Component {
    constructor(props) {
        super(props)
        this.store = configureStore()
        this.store.runSaga()
    }

    render() {
        return (
            <Provider store={ this.store }>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('whattodo', () => whattodo)
