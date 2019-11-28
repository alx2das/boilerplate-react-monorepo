import appReducer from "./reducers/appReducer";
import appSaga from "./sagas/appSaga";


export default {
	id: "app",
	reducers: {
		app: appReducer
	},
	sagas: [
		appSaga()
	]
}