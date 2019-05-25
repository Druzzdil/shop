import {FETCH_USERS_SUCCESS, BOOK_SEET} from "./actions";

export const REMOVE_USER = 'REMOVE_USER';
export const FETCH_USERS = 'FETCH_USERS';
export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILED = 'ADD_USER_FAILED';

const initialValues = {
    users: [],
    payload: [],
    isFetching: false,
    error: "",
    userPayload: {} || []
};

export default function users(state = initialValues, action){
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [
                    ...state.users,
                    {
                        users: action.text,
                    },
                ],
            };
        case FETCH_USERS:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                payload: action.users,
                isFetching: false
            };
        case BOOK_SEET:
            console.log(action.payload, 'reducer');
            return {
                ...state,
                userPayload: action.payload
            }
        default:
            return state
    }
}