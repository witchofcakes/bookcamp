import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './javascript/App';
import "./stylesheets/all_camps.css";
import "./stylesheets/camp_page.css";
import  "./stylesheets/mobile.css";
import "./stylesheets/login_user.css"
import "./stylesheets/create_camp.css"
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
