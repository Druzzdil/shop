import {FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS} from "./actions";

const initialState = {
    loading: false,
    products: [] || {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                loading: true
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading:false
            };
        default:{
            return state
        }
    }

}