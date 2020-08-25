import {takeLatest, put, call} from 'redux-saga/effects'
import Actions from '../actions'
import {API} from '../services'
import {_, Say, Consts, Storage} from '../utils'

function* attemptLogin({payload}) {
  try {
    let username = payload.username.trim()
    let password = payload.password.trim()

    if(!username || !password) {
      yield put(Actions.Creators.authFail())
      Say.warn(_('6'))
    }
    else {
      const res = yield call(API.login, {username, password})

      if(!res.error) {
          yield put(Actions.Creators.authSuccess())
          yield put(Actions.Creators.setUser(res.data))
      }
      else {
        yield put(Actions.Creators.authFail())
        Say.warn(res.message)
      }
    }
  }
  catch(err) {
    yield put(Actions.Creators.authFail())
    Say.err(_('500'))
  }
}

function* logout() {
  Storage.doSave(Consts.db.user)
}

export default function * authSaga() {
  yield takeLatest(Actions.Types.ATTEMPT_LOGIN, attemptLogin)
  yield takeLatest(Actions.Types.LOGOUT, logout)
}
