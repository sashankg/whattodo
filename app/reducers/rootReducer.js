import { combineReducers } from 'redux'

import navigationReducer from './navigationReducer.js'

export default combineReducers({
    navigation: navigationReducer,
})
