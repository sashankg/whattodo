import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { LoginButton } from 'react-native-fbsdk'

import { facebookLoginSuccess } from '../actions/authActions.js'

class Onboard extends React.Component {
    static navigationOptions = {
        title: 'Onboard',
        gesturesEnabled: false,
        header: null,
    }

    render() {
        return <View 
            style={{
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'yellow'
            }}>
            <LoginButton 
                onLoginFinished={
                    (error, result) => {
                        if(error) {
                            //handle login error
                        }
                        else if(result.isCancelled) {
                            //handle cancelled login
                        }
                        else {
                            console.log(result)
                            this.props.facebookLoginSuccess()
                        }
                    }
                }/>
        </View>
    }
}

const mapDispatchToProps = {
    facebookLoginSuccess,
}
export default connect(null, mapDispatchToProps)(Onboard)
