import { all, takeEvery } from "redux-saga/effects";
import { createAction } from "@workspace/helpers";

const setSettingsReady = createAction('SETTINGS2.SET_SAGA_READY');

export function* initSaga() {
	console.log("initSaga.settings2");
}


export default function*() {
	yield all([
		takeEvery(setSettingsReady.type, initSaga),
	]);
}