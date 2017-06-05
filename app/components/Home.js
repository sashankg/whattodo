import React from 'react'
import { View, Text } from 'react-native'

import Card from './Card.js'

class Home extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <View>
            <Text>Home</Text>
            <Card style={{ alignSelf: 'center' }}/>
        </View>
    }

    static navigationOptions = {
        header: null,
    }
}

export default Home
