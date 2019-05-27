export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export const fetchProduct = () => ({
    type: FETCH_PRODUCTS
})

export const fetchProductSuccess = payload => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload
})

export const fetchProductFailed = error => ({
    type: FETCH_PRODUCTS,
    error
})

export const addProduct = () => ({
    type: ADD_PRODUCT
})

export const addProductSuccess = payload => ({
    type: ADD_PRODUCT_SUCCESS,
    payload
})

export const addProductFailure = error => ({
    type: ADD_PRODUCT_FAILURE,
    error
})