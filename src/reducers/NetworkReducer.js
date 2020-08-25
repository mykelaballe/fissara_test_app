import Actions from '../actions'
import Immutable from 'seamless-immutable'
import {createReducer} from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  isConnected: true
})

const networkSuccess = state => state.merge({ isConnected:true })
  
const networkFailure = state => state.merge({ isConnected:false })
  
const ACTION_HANDLERS = {
  [Actions.Types.NETWORK_SUCCESS]: networkSuccess,
  [Actions.Types.NETWORK_FAILURE]: networkFailure,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
