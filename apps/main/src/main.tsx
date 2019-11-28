import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';
import { configureModules, injectModules } from '@workspace/core';

import app from './modules/app';
import account from './modules/account';
import settings from './modules/settings';

const { store } = configureModules([app, account]);

setTimeout(() => {
	console.log('INIT', store.getState());
}, 1000);
setTimeout(() => {
	store.dispatch({ type: 'APP.SET_READY' });
	console.log('APP.SET_READY', store.getState());
}, 2000);
// setTimeout(() => {
// 	injectModules([account]);
//
// 	console.log("injectReducer", store.getState());
// }, 3000);
setTimeout(() => {
	store.dispatch({ type: 'ACCOUNT.SET_READY' });
	console.log('ACCOUNT.SET_READY', store.getState());
}, 4000);
setTimeout(() => {
	injectModules([settings]);
	console.log('injectReducer', store.getState());
}, 5000);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
