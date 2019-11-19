import {take, put, call, fork, select} from 'redux-saga/effects';
import * as actions from '../actions/configActions';
import {getValues} from '../reducers/configSelectors';
import {configApi} from '../services';

export function* loadConfig() {
  const values = yield call(configApi.load);
  yield put(actions.load(values));
}

export function* watchRequest() {
  while (true) {
    yield take(actions.REQUEST_TO_SAVE);
    const values = yield select(getValues);
    yield call(configApi.save, values);
    yield put(actions.successToSave());
  }
}

export function* startup() {
  yield fork(loadConfig);
}

export default function* root() {
  yield fork(startup);
  yield fork(watchRequest);
}
