import { createAction, createReducer } from '@workspace/helpers';

const setSettingsReady = createAction('SETTINGS.SET_READY');
const initialState = {
	name: 'settings',
	isLoading: true
};
const actionHandlers = {
	[setSettingsReady.type]: state => ({
		...state,
		isLoading: false
	})
};

export default createReducer(initialState, actionHandlers);
