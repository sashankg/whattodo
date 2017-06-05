import React from 'react'
import { View, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

class Card extends React.Component {

    constructor(props) {
        super(props)
        const { width, height } = Dimensions.get('window') 
        this.state = this.getCardDimensions(width, height)
    }

    componentDidMount() {
        Dimensions.addEventListener('change', (result) => {
            const { width, height } = result.window
            this.setState(this.getCardDimensions(width, height))
        })
    }

    getCardDimensions(w, h) {
        return { width: w * 0.5, height: h * 0.5 }
    }

    render() {
        const { width, height } = Dimensions.get('window') 
        return  <LinearGradient
            colors={[
                '#1abc9c',
                '#16a085'
            ]}
            style={{
                borderRadius: 4,
                width: this.state.width,
                height: this.state.height,
            }}
        />
    }

}

export default Card
