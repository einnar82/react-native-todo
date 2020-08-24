const reducer = (state, action) => {
	switch (action.type) {
		case FETCH_TODOS_REQUEST:
			return {
				loading: true,
				errors: false,
				todos: []
			};
		
		case FETCH_TODOS_SUCCESS:
				return {
					loading: false,
					errors: false,
					todos: action.todos
				};

		case FETCH_TODOS_FAILED:
				return {
					loading: false,
					errors: true,
					todos: []
				};
	
		default:
			return {
				...state
			}
	}
};

export default reducer;