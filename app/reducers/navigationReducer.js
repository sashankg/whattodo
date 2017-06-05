import App from '../components/App.js'

const initialState = App.router.getStateForAction(App.router.getActionForPathAndParams('Home'))

const navigationReducer = (state = initialState, action) => {
    const nextState = App.router.getStateForAction(action, state)
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state
}


export default navigationReducer
