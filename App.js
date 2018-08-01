import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/store/reducers'
import Routes from './Routes';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

export default class App extends Component {

  componentWillMount = () => {
    var config = {
      apiKey: "AIzaSyBUBf88kkHNNlGx5I-AwN74Vg1d2cxQOHg",
      authDomain: "caronte-652d6.firebaseapp.com",
      databaseURL: "https://caronte-652d6.firebaseio.com",
      projectId: "caronte-652d6",
      storageBucket: "caronte-652d6.appspot.com",
      messagingSenderId: "277964269157"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}
