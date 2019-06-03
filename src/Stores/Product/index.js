import productReducer from './reducers'
import {updateFilters} from '../../organisms/filters/actions'
import {
    fetchProducts,
    FETCH_PRODUCTS,
    fetchProductFailed,
    addProduct,
    addProductSuccess,
    addProductFailure
} from './actions'
export {
    updateFilters,
    fetchProducts,
    productReducer,
    FETCH_PRODUCTS,
    fetchProductFailed,
    addProduct,
    addProductSuccess,
    addProductFailure
}