import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import "./index.css"

import store, {persistor} from './redux/strore/store.js';
import { PersistGate } from "redux-persist/lib/integration/react";
import App from "./App.jsx";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor = {persistor}>
            <Router>
                <App/>
            </Router>
        </PersistGate>
    </Provider>,
    document.querySelector("#app")
)