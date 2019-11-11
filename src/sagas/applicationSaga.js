import { take, put, call, fork, select } from 'redux-saga/effects'
import * as actions from '../actions/applicationActions'
import { getConfig, getFreee } from '../reducers/applicationSelectors'
import { applicationApi } from '../services'
import ENV from '../_environments'

export function* loadConfig() {
  const values = yield call(applicationApi.loadConfig)
  yield put(actions.loadConfig(values))
}

export function* loadStrage() {
  const accessToken = window.sessionStorage.kfa_plugin_freeeAccessToken;
  const companyId = window.sessionStorage.kfa_plugin_freeeCompanyId;
  yield put(actions.loadStrage({
    accessToken, companyId,
  }))
}

export function* checkAuth() {
  const freee = yield select(getFreee)
  const queryString = window.location.search;
  if (!queryString && (!freee.accessToken || freee.accessToken === 'FINISHED')) {
    yield put(actions.redirectToFreee())
  }
  else if (queryString && queryString.substr(0, 6) === '?code=') {
    const authCode = queryString.substr(6);
    if (!authCode) {
        console.log('freeeの認証情報取得に失敗しました。')
        yield put(actions.receiveAccessToken('FINISHED'))
        return
    }
    const config = yield select(getConfig)
    const accessToken = yield call(applicationApi.getAcceccToken, {
      ...config,
      callBackUrl: yield call(applicationApi.getCallBackUrl),
      authCode: authCode,
    })
    yield put(actions.receiveAccessToken(accessToken))
    yield put(actions.redirectToRoot())
  }
  else if (freee.accessToken && freee.accessToken !== 'FINISHED') {
    const companyId = yield call(applicationApi.getCompanyId, {
      accessToken: freee.accessToken
    })
    yield put(actions.receiveCompayId(companyId))
  }
}

export function* watchRedirect() {
  while (true) {
    const action = yield take([
      actions.REDIRECT_TO_FREEE,
      actions.REDIRECT_TO_ROOT,
    ])
    const config = yield select(getConfig)
    const callBackUrl = yield call(applicationApi.getCallBackUrl)
    const url = (action.type === actions.REDIRECT_TO_FREEE)
      ? ENV.authUrl + '?response_type=code' +
        '&client_id=' + config.clientId +
        '&redirect_uri=' + encodeURIComponent(callBackUrl)
      : callBackUrl
    window.location.href = url
  }
}

export function* startup() {
  yield call(loadConfig)
  yield call(loadStrage)
  yield fork(checkAuth)
}

export default function* root() {
  yield fork(startup)
  yield fork(watchRedirect)
}
