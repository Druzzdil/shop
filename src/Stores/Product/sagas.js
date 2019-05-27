import { put, takeLatest, call } from 'redux-saga/effects';
import {fetchProductSuccess, FETCH_PRODUCTS, addProductSuccess} from './index'
import axios from 'axios';
import {ADD_PRODUCT} from "./actions";

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

function addProduct(payload) {
    console.log(payload, 'payload111');
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/employees', {payload})
            .then(response =>{
                resolve(response)
                console.log(response, 'response');
            })
            .catch(error => {
                reject(error);
            });
    })
}

function* productWorker(action) {
    console.log(action.payload, 'sagas');
    try {
       const response = yield call(addProduct, action.payload)
       yield put(addProductSuccess(response))
        yield put(FETCH_PRODUCTS);
    } catch {
     console.log('error');
    }
}

export function* fetchProductsWatcher() {
    yield takeLatest(FETCH_PRODUCTS, productsWorker);
    yield takeLatest(ADD_PRODUCT, productWorker);
}