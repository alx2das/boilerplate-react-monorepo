import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { all } from "redux-saga/effects";
import { routerMiddleware } from 'connected-react-router';

import { normalizeModule } from '../helpers/normalize';
import { configureStore, injectReducers } from './configureStore';

const defaultOptions = {
	basename: '/',
	initialState: {}
};

let store = null;
let sagaMiddleware = null;

export function configureModules(modules = [], options = {}) {
	const { basename, initialState } = { ...defaultOptions, ...options };
	const { routes, reducers, sagas, middleware } = normalizeModule(modules);

	const history = createBrowserHistory({ basename });
	sagaMiddleware = createSagaMiddleware();

	middleware.push(routerMiddleware(history));
	middleware.push(sagaMiddleware);

	store = configureStore(reducers, initialState, { history, middleware });
	runSaga(sagaMiddleware, sagas);

	return { routes, store };
}

export function injectModules(modules = []) {
	if (store === null) {
		throw new Error('Store not initialized');
	}

	const { routes, reducers, sagas } = normalizeModule(modules);

	injectReducers(store, reducers);
	runSaga(sagaMiddleware, sagas);

	return { routes };
}


// ...
// =============================================================================

function runSaga(sagaMiddleware, sagas = []) {
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