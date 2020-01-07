const initialState = {
    data: 90
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE':
            return {
                ...state, data: state.data + 1
            }
        default:
            return state
    }
}

export default testReducer