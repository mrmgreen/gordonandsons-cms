import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app';
import rootReducer from './reducers'

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App value="hello" />
  </Provider>,
  document.getElementById('root')
)
