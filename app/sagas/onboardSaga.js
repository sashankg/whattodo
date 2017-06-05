import { put, fork, take, call } from 'redux-saga/effects';

import { AccessToken } from 'react-native-fbsdk'
import { NavigationActions } from 'react-navigation'

export default function* onboardSaga(firebase) {
    const accessToken = yield call(AccessToken.getCurrentAccessToken)

    if(accessToken == null) {
        yield put(NavigationActions.navigate({ routeName: 'Onboard' }))
        yield take('FACEBOOK_LOGIN_SUCCESS')
        yield put(NavigationActions.back())
        return yield call(AccessToken.getCurrentAccessToken)
    }
    else {
        return accessToken
    }

}
