import firebase from 'firebase/app'
import 'firebase/storage'

import firebaseConfig from './firebaseConfig.json'

firebase.initializeApp(firebaseConfig)

// eslint-disable-next-line import/prefer-default-export
export const storage = firebase.storage()
