import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './app/App';
import {Provider} from 'react-redux'
import createStore from '../src/redux'
import storage from '../src/helper/storage'
let phone = storage.get(storage.PHONE_KEY)
let initState = {
  phone,
  loginShow: false,
  loginCb: null
}
let createProvider = children => <Provider store={createStore(initState)}>{children}</Provider>

ReactDOM.render(
  createProvider(<App />),
document.getElementById('root'));
