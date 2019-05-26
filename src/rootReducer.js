import { combineReducers } from 'redux'
import {productReducer} from './Stores/Product/index'

const rootReducer =  combineReducers({
    productReducer: productReducer
});

export default rootReducer