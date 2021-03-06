import { put, takeLatest, call } from 'redux-saga/effects';
import {FETCH_USERS, fetchUsersSuccess } from './actions'
import axios from 'axios';

function fetchUsers(){
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3000/employees`)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}

function* userWorker(action) {
    try {
        const response = yield call(fetchUsers, action.payload);
        yield put(fetchUsersSuccess(response.data));
    } catch(err) {
        console.log(err)
    }
}

export function* getUsersWatcher() {
    yield takeLatest(FETCH_USERS, userWorker);
}