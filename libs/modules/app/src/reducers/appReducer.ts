import { createReducer } from '@workspace/helpers';
import * as action from "../actions/appAction";


const initialState = {
	isLoading: true
};
const actionHandlers = {
	[action.initializeApplication.type]: state => ({
		...state,
		isLoading: true
	})
};


export default createReducer(initialState, actionHandlers);