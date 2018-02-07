import React from "react";
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './store/configure-store'
import App from "./components/App"
import './sass/styles.scss'
import './sass/styleguide-styles.scss'

const history = createHistory()

let store = configureStore({},history)

ReactDOM.render(
    <Provider store = {store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App} />
        </ConnectedRouter>
    </Provider>
, document.body)