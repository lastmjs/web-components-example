const InitialState = {
    text: ''
};

export const RootReducer = (state=InitialState, action) => {
    switch(action.type) {
        case 'CHANGE_TEXT': {
            const newState = Object.assign({}, state);

            newState.text = action.text;

            return newState;
        }
        default: {
            return state;
        }
    }
};
