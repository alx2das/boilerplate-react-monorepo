// Containers
import SearchContainer from "./containers/SearchContainer";
import ConfirmContainer from "./containers/ConfirmContainer";
import FinalContainer from "./containers/FinalContainer";

export default {
	id: "welcome",
	routes: [
		{
			id: "welcome/search",
			exact: true,
			path: "/welcome-search",
			component: SearchContainer
		},
		{
			id: "welcome/confirm",
			exact: true,
			path: "/welcome-confirm",
			component: ConfirmContainer
		},
		{
			id: "welcome/final",
			exact: true,
			path: "/welcome-final",
			component: FinalContainer
		},
	]
}