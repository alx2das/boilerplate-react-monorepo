export function createAction(type, args = {}) {
	const _type = ('' + type).toString();
	const _action = (payload = args) => ({ type: _type, payload });

	_action.toString = () => _type;
	_action.type = _type;

	return _action;
}

export function createReducer(initialState, actionHandlers) {
	function defaultHandler(state) {
		return state;
	}

	function reducer(state = initialState, action) {
		const handler =
			actionHandlers[action.type] ||
			actionHandlers.default ||
			defaultHandler;
		return handler(state, action.payload);
	}

	return reducer;
}
