import { all, takeEvery } from "redux-saga/effects";
import * as action from "../actions/appAction";


export function* initializeApplicationSaga() {
	console.log("initializeApplicationSaga");
}


export default function* () {
	yield all([
		takeEvery(action.initializeApplication.type, initializeApplicationSaga)
	]);
}