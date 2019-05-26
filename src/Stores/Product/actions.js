export const ADD_PRODUCT = 'ADD_PRODUCT';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export const fetchProduct = () => ({
    type: FETCH_PRODUCTS
})

export const fetchProductSuccess = payload => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload
})

export const fetchProductFailed = (error) => ({
    type: FETCH_PRODUCTS,
    error
})