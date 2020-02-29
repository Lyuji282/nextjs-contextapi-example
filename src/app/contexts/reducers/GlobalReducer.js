export const GlobalReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const {value} = action;
            const res = value + state.value;
            return {value: res};
        default:
            return state
    }
};