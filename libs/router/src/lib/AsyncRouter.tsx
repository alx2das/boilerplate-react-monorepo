import React, { Component } from "react";
import loadable from '@loadable/component';
import { injectModules } from '@workspace/core';
import UiRouter from './UiRouter';


class AsyncRouter extends Component {
	get routes() {
		const { routes, ...options } = this.props;

		return routes.map(({ async, component, ...route }) => ({
			...route,
			component: async ? this.renderAsync(component, options) : component
		}));
	}

	renderAsync = (importComponent, options = {}) => {
		return loadable(
			() => importComponent().then(module => {
				return () => <UiRouter {...options} routes={injectModules(module.default)} />;
			}),
			{ fallback: <div>Loading...</div> }
		);
	};

	render() {
		return <UiRouter routes={this.routes} />;
	}
}


export default AsyncRouter;
