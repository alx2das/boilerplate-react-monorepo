import { createReducer } from '@workspace/helpers';
import * as action from "../actions/authAction";

const initialState = {
	isLoading: false
};
const actionHandlers = {
	// Send Sign-In
	[action.sendSignIn.request.type]: state => ({
		...state,
		isLoading: true
	}),
	[action.sendSignIn.success.type]: state => ({
		...state,
		isLoading: false
	}),
	[action.sendSignIn.failure.type]: state => ({
		...state,
		isLoading: false
	}),

	// Send Sign-Up
	[action.sendSignUp.request.type]: state => ({
		...state,
		isLoading: true
	}),
	[action.sendSignUp.success.type]: state => ({
		...state,
		isLoading: false
	}),
	[action.sendSignUp.failure.type]: state => ({
		...state,
		isLoading: false
	}),

	// Send Forgot
	[action.sendForgot.request.type]: state => ({
		...state,
		isLoading: true
	}),
	[action.sendForgot.success.type]: state => ({
		...state,
		isLoading: false
	}),
	[action.sendForgot.failure.type]: state => ({
		...state,
		isLoading: false
	})
};

export default createReducer(initialState, actionHandlers);