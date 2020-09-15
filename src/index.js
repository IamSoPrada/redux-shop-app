import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

import App from "./components/app"
import ErrorBoundry from "./components/error-boundry"
import GoodStoreService from "./services/goodstore-service"
import { GoodStoreServiceProvider } from "./components/goodstore-service-context"

import store from "./store"

const goodstoreService = new GoodStoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <GoodStoreServiceProvider value={goodstoreService}>
                <Router>
                    <App />
                </Router>
            </GoodStoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById("root")
)