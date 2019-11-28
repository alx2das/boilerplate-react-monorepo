import appReducer from './reducers/appReducer';
import app2Reducer from './reducers/app2Reducer';

export default {
	id: 'app',
	reducers: {
		app: appReducer,
		app2: app2Reducer
	}
};
