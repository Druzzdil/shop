import { put, takeLatest, call } from 'redux-saga/effects';
import {fetchProductSuccess, FETCH_PRODUCTS, addProductSuccess, fetchProduct} from './index'
import axios from 'axios';
import {ADD_PRODUCT} from "./actions";

function fetchUsers(){
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:4000/employees')
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
        yield put(fetchProductSuccess(response.data));
    } catch(error) {
        console.log(error, 'error');
    }
}

function addProduct(payload) {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:4000/employees', {payload})
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    })
}

function* productWorker(action) {
    try {
       const response = yield call(addProduct, action.payload)
       yield put(addProductSuccess(response.data))
       yield put(fetchProduct())

    } catch {
     console.log('error');
    }
}

export function* fetchProductsWatcher() {
    yield takeLatest(FETCH_PRODUCTS, productsWorker);
    yield takeLatest(ADD_PRODUCT, productWorker);
}