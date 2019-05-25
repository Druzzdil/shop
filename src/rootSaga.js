import {getUsersWatcher} from './Stores/users/sagas'
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        getUsersWatcher(),
    ]);
}