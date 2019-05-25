import { put, takeLatest, all, call } from 'redux-saga/effects';
import {FETCH_USERS, fetchUsersSuccess } from './actions'
import axios from 'axios';

function fetchUsers(id){
    console.log(id, 'top')
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3000/people`)
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}

function* userWorker(action) {
    console.log(action.id, 'saga');
    try {
        const response = yield call(fetchUsers, action.payload);
        console.log(response.data, '000000')
        yield put(fetchUsersSuccess(response.data));
    } catch(err) {
        console.log(err)
    }
}

export function* getUsersWatcher() {
    yield takeLatest(FETCH_USERS, userWorker);
}