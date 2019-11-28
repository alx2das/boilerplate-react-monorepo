// Containers
import SectionOneContainer from "./containers/SectionOneContainer";

export default {
	id: "sectionOne",
	routes: [
		{
			id: "sectionOne/section-one",
			exact: true,
			path: "/section-one",
			component: SectionOneContainer
		}
	]
}