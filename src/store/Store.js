import {createStore, applyMiddleware, compose} from 'redux'
import {autoRehydrate} from 'redux-persist'
import {createLogger} from 'redux-logger'
import rootReducer from '../reducers/'
import Config from '../config/DebugSettings'
import createSagaMiddleware from 'redux-saga'
import R from 'ramda'
import RehydrationServices from '../services/RehydrationServices'
import ReduxPersist from '../config/ReduxPersist'

// the logger master switch
const USE_LOGGING = Config.reduxLogging

// silence these saga-based messages
const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE']

// creat the logger
const logger = createLogger({
  predicate: (getState, { type }) => USE_LOGGING && R.not(R.contains(type, SAGA_LOGGING_BLACKLIST))
})

let middleware = []
const sagaMiddleware = createSagaMiddleware()
middleware.push(sagaMiddleware)

// Don't ship these
if (__DEV__) {
  middleware.push(logger)
}

// a function which can create our store and auto-persist the data
export default () => {
  
  // which enhancers we add are dynamic
  const enhancers = []

  // next bring in the middleware
  enhancers.push(applyMiddleware(...middleware))

  // add the autoRehydrate enhancer
  if (ReduxPersist.active) {
    enhancers.push(autoRehydrate())
  }

  // create the store!
  const store = createStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    RehydrationServices.updateReducers(store)
  }

  // kick off root saga
  store.runSaga = sagaMiddleware.run

  return store
}
