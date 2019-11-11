import { createStore, applyMiddleware } from 'redux'
import configReducer from '../reducers/configReducer'
import createSagaMiddleware from 'redux-saga'

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(configReducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run,
  }
}
