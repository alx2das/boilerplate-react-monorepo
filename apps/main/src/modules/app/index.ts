import appReducer from './reducers/appReducer';
import app2Reducer from './reducers/app2Reducer';

import appSaga from "./sagas/appSaga";

export default {
	id: 'app',
	reducers: {
		app: appReducer,
		app2: app2Reducer
	},
	sagas: [
		appSaga()
	]
};
