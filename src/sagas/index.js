import AuthSaga from './AuthSaga'
import HomeSaga from './HomeSaga'

const sagas = store => {
  store.runSaga(AuthSaga)
  store.runSaga(HomeSaga)
}

export default sagas