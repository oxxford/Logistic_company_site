import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom'

import {Layout} from "./layout";
import Provider from "react-redux/es/components/Provider";
import {store} from "../data/store";

const App = () => (
    <Provider store={store} >
        <Router>
            <Layout>

            </Layout>
        </Router>
    </Provider>
);


ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
