import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';

function UiRouter(props) {
	const { routes, notFound } = props;

	return (
		<Switch location={window.location}>
			{routes.map(route => (
				<Route key={route.id} exact={route.exact} path={route.path} component={route.component} />
			))}

			{notFound && <Route path="*">{notFound}</Route>}
		</Switch>
	);
}

export default withRouter(UiRouter);
