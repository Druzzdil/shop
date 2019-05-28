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
import AddProductPage from './Containers/AddProductPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
console.log(store.getState(), 'store');
ReactDOM.render(
    <Router history={createBrowserHistory}>
        <MuiThemeProvider>
            <Provider store={store}>
                <Route path="/" component={AddProductPage}/>
            </Provider>
        </MuiThemeProvider>
    </Router>
    ,document.getElementById('root')
);

serviceWorker.unregister();
