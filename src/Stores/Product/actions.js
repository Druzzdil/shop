import axios from "axios";

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
export const ADD_PRODUCT_FAILURE = 'ADD_PRODUCT_FAILURE';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

// export const fetchProduct = () => ({
//     type: FETCH_PRODUCTS
// })

// export const fetchProductSuccess = payload => ({
//     type: FETCH_PRODUCTS_SUCCESS,
//     payload
// })

export const fetchProducts = (filters)  => {
    return function (dispatch) {
        axios.get('http://localhost:4002/products').then(response => {
            let { data } = response;
            console.log(data, 'data');
            console.log(response, 'res');
            // if (!!filters && filters.length > 0) {
            //     data = data.filter(p =>
            //         filters.find(f => p.availableSizes.find(size => size === f))
            //     );
            // }
            return dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                payload: data
            });
        })
    }
}


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