import { put, takeLatest, call, takeEvery} from 'redux-saga/effects';
import {addProductSuccess} from './index'
import axios from 'axios';
import {ADD_PRODUCT, FETCH_PRODUCTS, fetchProductSuccess} from "./actions";

export const fetchProducts = () => {
    return new Promise(resolve => {
        return axios.get('http://localhost:4000/products').then(response => {
            console.log(response, 'response');
            resolve(response)
        })
    })
};

function* productsWorker(action) {
    try {
        const response = yield call(fetchProducts, action.payload);
        let { payload } = action;

        if (!!payload && payload.length > 0) {
            const filteredItems = response.data.filter(p => payload.find(f => p.availableSizes.find(size => size === f)));
            yield put(fetchProductSuccess(filteredItems));
         } else {
            yield put(fetchProductSuccess(response.data));
        }

         } catch(error) {
            console.log(error, 'error');
        }
}

function addProduct(payload) {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:4000/products', {payload})
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    })
}

function* productWorker(action) {
    console.log(action, 'saga2222');
    try {
        const response = yield call(addProduct, action.payload);
        yield put(addProductSuccess(response.data));
        yield put(fetchProducts())

    } catch {
        console.log('error');
    }
}

export function* fetchProductsWatcher() {
    yield takeEvery(FETCH_PRODUCTS, productsWorker);
    yield takeEvery(ADD_PRODUCT, productWorker);
}
