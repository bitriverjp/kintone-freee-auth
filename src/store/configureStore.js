import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import configReducer from '../reducers/configReducer';
import applicationReducer from '../reducers/applicationReducer';

export const CONFIG = 'CONFIG';
export const APPLICATION = 'APPLICATION';

export const configureStore = (type) => {
  let reducer;
  if (!type) return {};
  if (type === CONFIG) reducer = configReducer;
  else if (type === APPLICATION) reducer = applicationReducer;

  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(reducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run,
  };
};
