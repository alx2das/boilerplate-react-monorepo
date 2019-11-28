import { createAction } from "@workspace/helpers";

export const sendSignIn = {
	request: createAction("AUTH.SEND_SIGN_IN.REQUEST"),
	success: createAction("AUTH.SEND_SIGN_IN.SUCCESS"),
	failure: createAction("AUTH.SEND_SIGN_IN.FAILURE"),
};
export const sendSignUp = {
	request: createAction("AUTH.SEND_SIGN_UP.REQUEST"),
	success: createAction("AUTH.SEND_SIGN_UP.SUCCESS"),
	failure: createAction("AUTH.SEND_SIGN_UP.FAILURE"),
};
export const sendForgot = {
	request: createAction("AUTH.SEND_FORGOT.REQUEST"),
	success: createAction("AUTH.SEND_FORGOT.SUCCESS"),
	failure: createAction("AUTH.SEND_FORGOT.FAILURE"),
};