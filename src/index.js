import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css'; //js
import 'materialize-css/dist/css/materialize.min.css'; //css
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

import App from './App';
import './index.css'
import rootReducer from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig,
      {
        attachAuthIsReady: true,
        // from the 'users' table it automatically copies the user info inside firebase store property
        //can be used from state.firebase.profile[...]
        useFirestoreForProfile: true,
        userProfile: 'users'
      }),
  )
)

//wait for firebase auth and then render the app to not have navbar links flicker
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root'));

  serviceWorker.unregister();
})

