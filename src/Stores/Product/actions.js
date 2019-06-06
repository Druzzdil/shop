import axios from "axios";
import {UPDATE_FILTER} from "../../organisms/filters/actionTypes";

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export const CHECKOUT_PRODUCT = 'CHECKOUT_PRODUCT'
export const CHECKOUT_PRODUCT_SUCCESS = 'CHECKOUT_PRODUCT_SUCCESS'
export const CHECKOUT_PRODUCT_FAILURE = 'CHECKOUT_PRODUCT_FAILURE'

export const fetchProducts = (filters, payload) => ({
    type: FETCH_PRODUCTS,
    filters,
    payload
});

export const fetchProductSuccess = payload => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload
});

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


//checkout

export const proceedCheckout = () => ({
    type: CHECKOUT_PRODUCT
})

export const proceedCheckoutSuccess = (payload) => ({
    type: CHECKOUT_PRODUCT_SUCCESS,
    payload
});

export const proceedCheckoutFailure = error => ({
    type: CHECKOUT_PRODUCT_FAILURE,
    error
});