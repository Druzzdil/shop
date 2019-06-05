import { put, takeLatest, call } from 'redux-saga/effects';
import {addProductSuccess} from './index'
import axios from 'axios';
import {ADD_PRODUCT, FETCH_PRODUCTS, fetchProductSuccess} from "./actions";

// export const fetchProducts = (filters) => dispatch => {
//     axios.get('http://localhost:4002/products').then(response => {
//         let { products } = response.data;
//         console.log(response, 'response');
//         console.log(response);
//         if (!!filters && filters.length > 0) {
//             products = products.filter(p =>
//                 filters.find(f => p.availableSizes.find(size => size === f))
//             );
//         }
//         return dispatch({
//             type: FETCH_PRODUCTS_SUCCESS,
//             payload: products
//         });
//     })
// }

export const fetchProducts = () => {
    return new Promise(resolve => {
        return axios.get('http://localhost:4002/products').then(response => {
            resolve(response)
        })
    })
};

function* productsWorker(action) {
    try {
        const response = yield call(fetchProducts, action.payload);
        let { payload } = action;

        if (!!payload && payload.length > 0) {
           const test = response.data.filter(p => payload.find(f => p.availableSizes.find(size => size === f)));
            yield put(fetchProductSuccess(test));
         }
        } catch(error) {
            console.log(error, 'error');
        }
}

function addProduct(payload) {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:4002/products', {payload})
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
        const response = yield call(addProduct, action.payload);
        yield put(addProductSuccess(response.data));
        yield put(fetchProducts())

    } catch {
        console.log('error');
    }
}

export function* fetchProductsWatcher() {
    yield takeLatest(FETCH_PRODUCTS, productsWorker);
    yield takeLatest(ADD_PRODUCT, productWorker);
}
