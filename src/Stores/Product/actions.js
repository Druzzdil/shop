import axios from "axios";
import {UPDATE_FILTER} from "../../organisms/filters/actionTypes";

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export const fetchProducts = (filters, payload) => ({
    type: FETCH_PRODUCTS,
    filters,
    payload
});

export const fetchProductSuccess = payload => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload
});

// export const fetchProducts = (filters) => dispatch => {
//         // return axios.get('http://localhost:4002/products').then(response => {
//         //     return dispatch({
//         //         type: FETCH_PRODUCTS_SUCCESS,
//         //         payload: response.data
//         //     });
//         // })
//         return axios.get('http://localhost:4002/products').then(response => {
//             let { data } = response;
//             // if (!!filters && filters.length > 0) {
//             //     data = data.filter(p =>
//             //         filters.find(f => p.availableSizes.find(size => size === f))
//             //     );
//             // }
//
//             return dispatch({
//                 type: FETCH_PRODUCTS,
//                 payload: data
//             });
//     })
// }

export const updateFilters = filters => ({
    type: UPDATE_FILTER,
    payload: filters
});

export const fetchProductFailed = error => ({
    type: FETCH_PRODUCTS,
    error
})

export const addProduct = (payload, id) => ({
    type: ADD_PRODUCT,
    payload,
    id
})

export const addProductSuccess = payload => ({
    type: ADD_PRODUCT_SUCCESS,
    payload
})

export const addProductFailure = error => ({
    type: ADD_PRODUCT_FAILURE,
    error
})