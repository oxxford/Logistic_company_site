import {Link, Route} from "react-router-dom";
import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

import style from './layout.css'
import LoginDialog from "./login/login";
import SignupDialog from "./signup/signup";
import {login} from "./data/action-creators";
import connect from "react-redux/es/connect/connect";
import {About} from "./about/about";
import {Background} from "./background";
import Calculator from "./calculator/Calculator";
import profile from "./profile/Profile";
import Orders from "./orders/Orders"
import NewOrder from "./NewOrder/NewOrder";
import Tracking from "./tracking/tracking"

const layout = (props) => (
    <div>
        <AppBar position="static">
            <Toolbar variant="dense">
                <Button color="inherit" component={Link} to='/'>
                    Group 2 inc.
                </Button>
                <span className={style.button}/>
                <Button variant="contained" color="default" component={Link} to='/about'>
                    About
                </Button>
                <span className={style.appBarButtonSpacer}/>
                <Button variant="contained" color="default" component={Link} to='/calculate'>
                    Calculate price
                </Button>
                <span className={style.appBarButtonSpacer}/>
                <Button variant="contained" color="default" component={Link} to='/tracking'>
                    Track a parcel
                </Button>
                <span className={style.appBarButtonSpacer}/>
                <Button variant="contained" color="secondary" onClick={() => props.login(true)}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>

        <LoginDialog/>
        <SignupDialog/>

        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Background} />
        <Route exact path="/calculate" component={Calculator} />
        <Route exact path="/profile" component={profile} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/neworder" component={NewOrder} />
        <Route exact path="/tracking" component={Tracking} />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    login: (isOpen) => dispatch(login(isOpen))
});

export const Layout = connect(null, mapDispatchToProps)(layout);