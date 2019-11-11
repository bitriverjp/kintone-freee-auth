import { take, put, call, fork, select } from 'redux-saga/effects'
import * as actions from '../actions/configActions'
import { applicationApi } from '../services'

export function* loadConfig() {
  const values = yield call(applicationApi.load)
  yield put(actions.load(values))
}

export function* startup() {
  yield fork(loadConfig)
}

export default function* root() {
  yield fork(startup)
}
