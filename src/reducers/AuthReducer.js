import Actions from '../actions'
import Immutable from 'seamless-immutable'
import {createReducer} from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  attemptingAuth: false,
  authSuccess: false,
  authFail: false,
  isLoggedIn: false
})

const attemptLogin = state => state.merge({ attemptingAuth:true, authSuccess:false, authFail:false })

const authSuccess = state => state.merge({ authSuccess:true, attemptingAuth:false, isLoggedIn:true })

const authFail = state => state.merge({ authFail:true, attemptingAuth:false })

const login = state => state.merge({ isLoggedIn:true })

const logout = state => state.merge({ isLoggedIn:false })
  
const ACTION_HANDLERS = {
  [Actions.Types.ATTEMPT_LOGIN]: attemptLogin,
  [Actions.Types.AUTH_SUCCESS]: authSuccess,
  [Actions.Types.AUTH_FAIL]: authFail,
  [Actions.Types.LOGIN]: login,
  [Actions.Types.LOGOUT]: logout
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
