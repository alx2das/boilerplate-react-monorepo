import { createAction, createReducer } from '@workspace/helpers';

const setAccountReady = createAction('ACCOUNT.SET_READY');
const initialState = {
	name: 'account',
	isLoading: true
};
const actionHandlers = {
	[setAccountReady.type]: state => ({
		...state,
		isLoading: false
	})
};

export default createReducer(initialState, actionHandlers);
