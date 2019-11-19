import '@babel/polyfill';
import * as React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import Desktop from './containers/Desktop';

import {APPLICATION, configureStore} from './store/configureStore';
import applicationSaga from './sagas/applicationSaga';

const store = configureStore(APPLICATION);
store.runSaga(applicationSaga);

kintone.events.on('app.record.index.show', (event) => {
  const kintoneSpaceElement = kintone.app.getHeaderSpaceElement();
  render(
    <Provider store={store}>
      <Desktop />
    </Provider>,
    kintoneSpaceElement
  );
  return event;
});
