import './index.css';
import store from './Redux/State';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom"

let renderEntireTree = (State) => {
    ReactDOM.render(
        <BrowserRouter>
            <App AppState={store.getState()} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root'))
}

renderEntireTree(store.getState())

serviceWorker.unregister();

store.subscribe(renderEntireTree);