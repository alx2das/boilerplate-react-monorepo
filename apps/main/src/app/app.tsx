import React from 'react';
import { Provider, connect } from 'react-redux';

const mapStateToProps = state => ({
	app: state.app,
	account: state.account
});
const ComponentHoc = connect(mapStateToProps)(Component);

export function App({ store }) {
	return (
		<Provider store={store}>
			<div className="app">
				<ComponentHoc />
			</div>
		</Provider>
	);
}

function Component({ app, account }) {
	return (
		<div>
			<h5>App.Component</h5>
			<ul>
				{((app && app.items) || []).map(e => (
					<li key={e.id}>
						{e.id} ==> {e.name}
					</li>
				))}
			</ul>
			<h5>account: {account && account.name}</h5>
		</div>
	);
}

export default App;
