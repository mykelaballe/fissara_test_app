import Actions from '../actions'
import Immutable from 'seamless-immutable'
import {createReducer} from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  data: null
})

const setUser = (state, action) => state.merge({ data:{...action.user} })
  
const ACTION_HANDLERS = {
  [Actions.Types.SET_USER]: setUser
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
