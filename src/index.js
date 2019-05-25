import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import createSagaMiddleware from 'redux-saga'
import {Router, Route} from 'react-router';
import createBrowserHistory from './history'
import Main from './Containers/index'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Router history={createBrowserHistory}>
        <Provider store={store}>
            <Route path="/" component={Main}/>
        </Provider>
    </Router>
    ,document.getElementById('root')
);

serviceWorker.unregister();
