import {
    ADD_PRODUCT,
    ADD_PRODUCT_FAILURE,
    ADD_PRODUCT_SUCCESS,
    CHECKOUT_PRODUCT, CHECKOUT_PRODUCT_FAILURE, CHECKOUT_PRODUCT_SUCCESS,
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_SUCCESS
} from "./actions";

const initialState = {
    loading: false,
    products: [],
    productList: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
             loading:true
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        case ADD_PRODUCT:
            return {
                ...state,
                loading: true
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                products: [action.payload.payload],
                loading: false
            }
        case ADD_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case CHECKOUT_PRODUCT:
            return {
                ...state,
                loading: true
            };
        case CHECKOUT_PRODUCT_SUCCESS:
            console.log(action.payload, 'reducer');
            return {
                ...state,
                productList: [
                    ...state.productList, action.payload
                ],
                loading: false
            };
        case CHECKOUT_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        default:{
            return state
        }
    }
}