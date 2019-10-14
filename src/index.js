import './index.css';
import store from './Redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"

// let renderEntireTree = (State) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                {/* <App State={State} dispatch={store.dispatch.bind(store)} store={store} /> */}
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'))
// }

// renderEntireTree(store.getState())

// store.subscribe(() => {
//     let state = store.getState()
//     renderEntireTree(state)
// });

serviceWorker.unregister();