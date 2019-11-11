import '@babel/polyfill'
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Config from './containers/Config'

import configureStore from './store/configureStore'
import configSaga from './sagas/configSaga'

const store = configureStore()
store.runSaga(configSaga)

render(
  <Provider store={store}>
    <Config />
  </Provider>,
  document.getElementById('kintone_freee_auth_config')
)
