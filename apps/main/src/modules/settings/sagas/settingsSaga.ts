import { all, fork } from "redux-saga/effects";


export function* initSaga() {
	console.log("initSaga.settings");
}


export default function*() {
	yield all([
		fork(initSaga)
	]);
}