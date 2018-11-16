import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css'; //js
import 'materialize-css/dist/css/materialize.min.css'; //css
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import './index.css'
import rootReducer from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
