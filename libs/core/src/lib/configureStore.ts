import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';

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
