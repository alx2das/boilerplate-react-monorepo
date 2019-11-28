import settingsReducer from './reducers/settingsReducer';
import settingsSaga from "./sagas/settingsSaga";
import settings2Saga from "./sagas/settings2Saga";

export default {
	id: 'settings',
	reducers: {
		settings: settingsReducer
	},
	sagas: [
		settingsSaga(),
		settings2Saga()
	]
};
