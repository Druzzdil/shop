import { put, takeLatest, call } from 'redux-saga/effects';
import {fetchProductSuccess, FETCH_PRODUCTS} from './index'
import axios from 'axios';

function fetchUsers(){
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/employees')
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}

function* productsWorker(action) {
    try {
        const response = yield call(fetchUsers, action.payload);
        console.log(response.data, '0000000');
        yield put(fetchProductSuccess(response.data));
    } catch(error) {
        console.log(error, 'error');
    }
}

export function* fetchProductsWatcher() {
    yield takeLatest(FETCH_PRODUCTS, productsWorker);
}