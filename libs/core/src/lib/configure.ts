import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';

import { normalizeModule } from '../helpers/normalize';
import { configureStore, injectReducers } from './configureStore';

const defaultOptions = {
	basename: '/',
	initialState: {}
};

let store = null;

export function configureModules(modules = [], options = {}) {
	const { basename, initialState } = { ...defaultOptions, ...options };
	const { routes, reducers, middleware } = normalizeModule(modules);

	const history = createBrowserHistory({ basename });
	const sagaMiddleware = createSagaMiddleware();

	middleware.push(routerMiddleware(history));
	middleware.push(sagaMiddleware);

	store = configureStore(reducers, initialState, { history, middleware });

	return { routes, store };
}

export function injectModules(modules = []) {
	if (store === null) {
		throw new Error('Store not initialized');
	}

	const { routes, reducers } = normalizeModule(modules);

	injectReducers(reducers, store);

	return { routes };
}
