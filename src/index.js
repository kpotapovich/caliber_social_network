import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redax/state";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";


 let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={store.addPost.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)} />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );

};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

