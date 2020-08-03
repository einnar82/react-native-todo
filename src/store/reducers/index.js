const initialState = {
    todos: []
}

const reducers = (state, action) => {
    switch (action.type) {
        case 'FETCH_TODOS':
            return {
                ...state,
                todos: state.todos
            }

        default:
            return {
                ...state
            }
    }
}