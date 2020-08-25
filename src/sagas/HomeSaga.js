import {takeLatest, put, call} from 'redux-saga/effects'
import Actions from '../actions'
import {API} from '../services'
import {_, Say} from '../utils'

function* fetchEmployees() {
  try {
    const res = yield call(API.getEmployees)

    yield put(Actions.Creators.fetchEmployeesSuccess(res))
  }
  catch(err) {
    yield put(Actions.Creators.fetchEmployeesFail())
    Say.err(_('500'))
  }
}

export default function * authSaga() {
  yield takeLatest(Actions.Types.FETCH_EMPLOYEES_ATTEMPT, fetchEmployees)
}
