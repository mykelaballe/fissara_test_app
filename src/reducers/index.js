import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import HomeReducer from './HomeReducer'
import NetworkReducer from './NetworkReducer'
import UserReducer from './UserReducer'

export default combineReducers({
    auth: AuthReducer,
    home: HomeReducer,
    user: UserReducer,
    network: NetworkReducer
})

export const persistentStoreBlacklist = []

export const persistentStoreWhitelist = ['app','user','auth']
