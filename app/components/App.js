import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'

import Home from './Home.js'
import Onboard from './Onboard.js'

const Navigator = StackNavigator({
    Home: { screen: Home },
    Onboard: { screen: Onboard }
})

class App extends React.Component {
    static router = Navigator.router
    render() {
        return <Navigator navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.navigation,
        })}/>
    }
}

function mapStateToProps(state) {
    return {
        navigation: state.navigation,
    }
}

export default connect(mapStateToProps)(App)
