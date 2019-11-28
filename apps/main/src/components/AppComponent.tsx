import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AsyncRouter } from "@workspace/router";

import MenuComponent from "./MenuComponent";


function AppComponent({ routes, store, children }) {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<MenuComponent />

				<AsyncRouter routes={routes} />

				{children}
			</BrowserRouter>
		</Provider>
	);
}


export default AppComponent;