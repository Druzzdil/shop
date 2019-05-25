import { combineReducers } from 'redux'
import users from './Stores/users/reducer'

const rootReducer =  combineReducers({
    user: users
});

export default rootReducer