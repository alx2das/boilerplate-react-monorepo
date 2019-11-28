import { all, takeEvery, put, delay } from "redux-saga/effects";

import * as action from "../actions/authAction";

export function* sendSignInSaga() {
	try {
		yield delay(1000);
		yield put(action.sendSignIn.success());
	} catch (e) {
		yield put(action.sendSignIn.failure());
	}
}

export function* sendSignUpSaga() {
	try {
		yield delay(1000);
		yield put(action.sendSignUp.success());
	} catch (e) {
		yield put(action.sendSignUp.failure());
	}
}

export function* sendForgotSaga() {
	try {
		yield delay(1000);
		yield put(action.sendForgot.success());
	} catch (e) {
		yield put(action.sendForgot.failure());
	}
}

export default function* () {
	yield all([
		takeEvery(action.sendSignIn.request.type, sendSignInSaga),
		takeEvery(action.sendSignUp.request.type, sendSignUpSaga),
		takeEvery(action.sendForgot.request.type, sendForgotSaga)
	])
}