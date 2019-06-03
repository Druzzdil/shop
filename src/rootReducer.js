import { combineReducers } from 'redux'
import {productReducer} from './Stores/Product/index'
import filtersReducer from './organisms/filters/reducer'

const rootReducer =  combineReducers({
    productReducer: productReducer,
    filters: filtersReducer
});

export default rootReducer