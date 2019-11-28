// Reducers
import authReducer from "./reducers/authReducer";

// Sagas
import authSaga from "./sagas/authSaga";

// Containers
import SignInContainer from "./containers/SignInContainer";
import SignUpContainer from "./containers/SignUpContainer";
import ForgotContainer from "./containers/ForgotContainer";


export default {
	id: "auth",
	reducers: {
		auth: authReducer
	},
	sagas: [
		authSaga()
	],
	routes: [
		{
			id: "auth/sign-in",
			exact: true,
			path: "/sign-in",
			component: SignInContainer
		},
		{
			id: "auth/sign-up",
			exact: true,
			path: "/sign-up",
			component: SignUpContainer
		},
		{
			id: "auth/forgot",
			exact: true,
			path: "/forgot",
			component: ForgotContainer
		}
	]
}