export function normalizeModule(modules = []) {
	const result = modules.reduce(
		(accum, module) => {
			if (module.routes) {
				accum.routes = accum.routes.concat(module.routes);
			}

			if (module.reducers) {
				accum.reducers = {
					...accum.reducers,
					...module.reducers
				};
			}

			return accum;
		},
		{
			routes: [],
			middleware: [],
			reducers: {},
			sagas: []
		}
	);

	if (result.routes.length > 0) {
		result.routes = sortingRoutes(result.routes);
	}

	return result;
}

export function sortingRoutes(routes = []) {
	return routes.sort((prev, next) => {
		if (prev.path.length > next.path.length) {
			return -1;
		}

		if (prev.path.length > next.path.length) {
			return 1;
		}

		return 0;
	});
}
