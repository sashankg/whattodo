import { put, fork, call } from 'redux-saga/effects';

import * as firebase from 'firebase'

import onboardSaga from './onboardSaga.js'

export default function* rootSaga() {
    const fb = firebase.initializeApp({
        apiKey: "AIzaSyBqe3crBGDypfosVsEyLIZUW4hweuXwt_M",
        authDomain: "whattodo-322a1.firebaseapp.com",
        databaseURL: "https://whattodo-322a1.firebaseio.com",
        projectId: "whattodo-322a1",
        storageBucket: "whattodo-322a1.appspot.com",
        messagingSenderId: "703361633608"
    })

    const accessToken = yield call(onboardSaga, fb)
    const credential = firebase.auth.FacebookAuthProvider.credential(accessToken);
    try {
        const user = yield fb.auth().signInWithCredential(credential)
    }
    catch(error) {
        console.log(error)
    }
}
