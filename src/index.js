import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer'
import rootSaga from './rootSaga'
import createSagaMiddleware from 'redux-saga'
import {Router, Route, Switch} from 'react-router';
import createBrowserHistory from './history'
import AddProductPage from './Containers/AddProductPage'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from './Containers/Dashboard'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Router history={createBrowserHistory}>
        <MuiThemeProvider>
            <Switch>
                <Provider store={store}>
                    <Route path="/create" component={AddProductPage}/>
                    <Route exact path="/" component={Dashboard}/>
                </Provider>
            </Switch>
        </MuiThemeProvider>
    </Router>
    ,document.getElementById('root')
);

serviceWorker.unregister();
