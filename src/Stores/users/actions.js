export const REMOVE_USER = 'REMOVE_USER';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const ADD_USER = 'ADD_USER';
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILED = 'ADD_USER_FAILED';
export const BOOK_SEET = 'BOOK_SEET';

export const removeUser = (user) => ({
    type: REMOVE_USER,
    user,
});

export const fetchUsers = (id) => ({
    type: FETCH_USERS,
    id
});

export const fetchUsersSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    users,
});

export const addElement = (text) => ({
    type: ADD_USER,
    text,
});

export const addUserSuccess = (payload) => ({
    type:ADD_USER_SUCCESS,
    payload
});

export const addUserError = (error) => ({
    type:ADD_USER_FAILED,
    error
});

export const bookSeet = payload => ({
    type: BOOK_SEET,
    payload,
})