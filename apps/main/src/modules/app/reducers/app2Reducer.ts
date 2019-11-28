import { createAction, createReducer } from '@workspace/helpers';

const setAppReady = createAction('APP2.SET_READY');

const initialState = {
	name: 'app2',
	isLoading: true
};
const actionHandlers = {
	[setAppReady.type]: state => ({
		...state,
		isLoading: false,
		items: [
			{ id: '123', name: '1231' },
			{ id: '234', name: '1232' },
			{ id: '345', name: '1233' },
			{ id: '456', name: '1234' }
		]
	})
};

export default createReducer(initialState, actionHandlers);
