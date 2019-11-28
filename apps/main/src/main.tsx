import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import { configureModules } from "@workspace/core";
import { UiRouter } from "@workspace/router";

import AppComponent from "./components/AppComponent";
import mainCommon from "./entriesRoutes/mainCommon";


const {routes, ...initStore} = configureModules(mainCommon);
const asyncRoutes = [
	{
		id: "main-auth",
		async: true,
		path: ["/sign-in", "/sign-up", "/forgot"],
		component: () => import("./entriesRoutes/mainAuth")
	},
	{
		id: "main-welcome",
		async: true,
		path: ["/welcome-search", "/welcome-confirm", "/welcome-final"],
		component: () => import("./entriesRoutes/mainWelcome")
	},
	{
		id: "main-sectionOne",
		async: true,
		path: "/section-one",
		component: () => import("./entriesRoutes/mainSectionOne")
	},
	{
		id: "main-sectionTwo",
		async: true,
		path: "/section-two",
		component: () => import("./entriesRoutes/mainSectionTwo")
	},
	{
		id: "main-common",
		path: "/",
		component: () => <UiRouter routes={routes} />
	}
];
const Root = () => (
	<AppComponent routes={asyncRoutes} {...initStore}>
		<div>other components</div>
	</AppComponent>
);


ReactDOM.render(<Root />, document.getElementById('root'));