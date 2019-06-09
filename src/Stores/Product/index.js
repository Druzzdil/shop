import productReducer from './reducers'
import {updateFilters} from '../../organisms/filters/actions'
import {
    proceedCheckoutSuccess,
    fetchProducts,
    FETCH_PRODUCTS,
    fetchProductFailed,
    addProduct,
    addProductSuccess,
    addProductFailure,
} from './actions'
export {
    proceedCheckoutSuccess,
    updateFilters,
    fetchProducts,
    productReducer,
    FETCH_PRODUCTS,
    fetchProductFailed,
    addProduct,
    addProductSuccess,
    addProductFailure
}