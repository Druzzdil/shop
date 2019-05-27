import {ADD_PRODUCT, ADD_PRODUCT_FAILURE, ADD_PRODUCT_SUCCESS, FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS} from "./actions";

const initialState = {
    loading: false,
    products: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            console.log(action, 'aiiaiiaia');
            return {
                ...state,
             loading:true
            };
        case FETCH_PRODUCTS_SUCCESS:
            console.log(action, 'fetch');
            return {
                ...state,
                products: action.payload,
                loading:false
            };
        case ADD_PRODUCT:
            return {
                ...state,
                loading: true
            };
        case ADD_PRODUCT_SUCCESS:
            console.log(action, 'reducer');
            return {
                ...state,
                products: [action.payload],
                loading: false
            }
        case ADD_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        default:{
            return state
        }
    }

}