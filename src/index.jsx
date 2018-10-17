import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom'

import {Layout} from "./layout";
import Provider from "react-redux/es/components/Provider";
import {store} from "./data/store";
import {Signup} from "./signup/signup";
import Route from "react-router-dom/es/Route";

const App = () => (
    <Provider store={store} >
        <Router>
            <div>
                <Route path="/" component={Layout} />
            </div>
        </Router>
    </Provider>
);


ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
