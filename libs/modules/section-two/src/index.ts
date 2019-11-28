// Containers
import SectionTwoContainer from "./containers/SectionTwoContainer";

export default {
	id: "sectionTwo",
	routes: [
		{
			id: "sectionTwo/section-two",
			exact: true,
			path: "/section-two",
			component: SectionTwoContainer
		}
	]
}