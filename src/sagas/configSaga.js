import { take, put, call, fork, select } from 'redux-saga/effects'
import * as actions from '../actions/configActions'
import { getValues } from '../reducers/configSelectors'
import { configApi } from '../services'

export function* loadConfig() {
  const values = yield call(configApi.load)
  yield put(actions.load(values))
}

export function* watchRequest() {
  while (true) {
    yield take(actions.REQUEST_TO_SAVE)
    const values = yield select(getValues)
    yield call(configApi.save, values)
    yield put(actions.successToSave())
  }
}


export function* startup() {
  yield fork(loadConfig)
}

// Config.js
// const pluginId = kintone.$PLUGIN_ID
// let config = kintone.plugin.app.getConfig(pluginId)
// if (!config) config = {
//   clientId: '',
//   callBackUrl: '',
// }
// let proxyConfig = kintone.plugin.app.getProxyConfig(ENV.tokenUrl, 'POST')
// console.log(proxyConfig)
// this.state = {
//   pluginId: pluginId,
//   ...config,
//   clientSecret: proxyConfig.data.client_secret
// }
// }

// handleSubmit(config) {
// if (!config.clientId) return alert('必須です。')
// if (!config.clientSecret) return alert('必須です。')
// if (!config.callBackUrl) return alert('必須です。')

// const header = {
//   'Content-Type': 'application/x-www-form-urlencoded'
// }
// const data = {
//   'client_secret': config.clientSecret,
// }
// kintone.plugin.app.setProxyConfig(ENV.tokenUrl, 'POST', header, data, () => {
//   kintone.plugin.app.setConfig({
//     clientId: config.clientId,
//     callBackUrl: config.callBackUrl,
//   })
// })  
// }

export default function* root() {
  yield fork(startup)
  yield fork(watchRequest)
}
