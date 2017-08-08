import React from 'react'
import { View } from 'react-native'
import Card from './Card.js'

class CardContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { layout: null }
    }

    onLayout(event) {
        this.setState({ layout: event.nativeEvent.layout })
    }

    render() {
        return <View 
            style={{
                flex: 1,
                backgroundColor: 'white',
                overflow: 'visible',
                alignSelf: 'stretch',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onLayout={ this.onLayout.bind(this) }>
            { this.state.layout ? <Card layout={ this.state.layout } /> : null }
        </View>
    }
}

export default CardContainer
