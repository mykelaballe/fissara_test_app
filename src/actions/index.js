import {createActions} from 'reduxsauce'

const {Types, Creators} = createActions({
  attemptLogin: ['payload'],
  authSuccess: null,
  authFail: null,
  login: null,
  logout: null,

  setUser: ['user'],

  fetchEmployeesAttempt: null,
  fetchEmployeesSuccess: ['data'],
  fetchEmployeesFail: null,

  networkSuccess: null,
  networkFailure: null
})

export default {
    Types,
    Creators
}