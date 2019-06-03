import { UPDATE_FILTER } from './actionTypes';

const initialState = {
  items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FILTER:
            console.log(action, 'filters reducer');
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;

    }
}