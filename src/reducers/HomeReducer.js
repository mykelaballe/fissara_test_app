import Actions from '../actions'
import Immutable from 'seamless-immutable'
import {createReducer} from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  employees: [],
  fetching: false,
  fetchSuccess: false,
  fetchFail: false
})

const fetchEmployeesAttempt = state => state.merge({ fetching:true, fetchSuccess:false, fetchFail:false })

const fetchEmployeesSuccess = (state, action) => state.merge({ fetchSuccess:true, fetching:false, employees:action.data })

const fetchEmployeesFail = state => state.merge({ fetchFail:true, fetching:false })
  
const ACTION_HANDLERS = {
  [Actions.Types.FETCH_EMPLOYEES_ATTEMPT]: fetchEmployeesAttempt,
  [Actions.Types.FETCH_EMPLOYEES_SUCCESS]: fetchEmployeesSuccess,
  [Actions.Types.FETCH_EMPLOYEES_FAIL]: fetchEmployeesFail
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
