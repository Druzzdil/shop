import {fetchProductsWatcher} from './Stores/Product/sagas'
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        fetchProductsWatcher(),
    ]);
}