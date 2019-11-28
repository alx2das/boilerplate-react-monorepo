import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import { all } from "redux-saga/effects";

let staticReducers = null;

export function configureStore(
	reducers,
	initialState,
	{ history, middleware }
) {
	staticReducers = {
		form: formReducer,
		router: connectRouter(history),
		...reducers
	};

	const _middleware = [applyMiddleware(...middleware)];
	const enhancer = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
		? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"](..._middleware)
		: compose(..._middleware);

	return createStore(combineReducers(staticReducers), initialState, enhancer);
}

export function injectReducers(store, reducers = {}) {
	Object.assign(staticReducers, reducers);
	store.replaceReducer(combineReducers(staticReducers));
}


export function runSaga(sagaMiddleware, sagas = []) {
	if (sagaMiddleware === null) {
		throw new Error('Store not initialized');
	}

	if (sagas.length > 0) {
		sagaMiddleware.run(rootSagas(sagas));
	}

	function rootSagas(sagas) {
		return function* () {
			yield all(sagas);
		}
	}
}