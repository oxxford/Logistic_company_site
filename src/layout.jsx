import {Link, Route} from "react-router-dom";
import React from "react";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

import style from './layout.css'
import LoginDialog from "./login/login";
import {login} from "../data/action-creators";
import connect from "react-redux/es/connect/connect";

const layout = (props) => (
    <div>
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="title" color="inherit" className={style.appBarTitle}>
                    Missina inc.
                </Typography>
                <Button variant="contained" color="default" >
                    About
                </Button>
                <span className={style.appBarButtonSpacer}/>
                <Button variant="contained" color="default" >
                    Calculate price
                </Button>
                <span className={style.appBarButtonSpacer}/>
                <Button variant="contained" color="default" onClick={() => props.login(true)}>
                    Track a parcel
                </Button>
                <span className={style.appBarButtonSpacer}/>
                <Button variant="contained" color="secondary" onClick={() => props.login(true)}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
        <LoginDialog/>
        {/*<Route exact path="/login" component={LoginDialog} />
        <Route exact path="/news" component={ConnectedNews}/>
        <Route exact path="/info" component={Info}/>*/}
        <div className={style.background}>
            <div className={style.firstBlock}>
                <Typography color='default' variant="display3">
                    We deliver...
                </Typography>
                <Typography color='default' variant="display3">
                    Everywhere!
                </Typography>
                <Button variant="contained" color="secondary" onClick={() => props.login(true)}>
                    Make an order
                </Button>
            </div>

            <div className={style.secondBlock}>
                <Typography color='default' variant="display3">
                    Don't know how much it will cost?
                </Typography>
                <Typography color='default' variant="display3">
                    We can help you!
                </Typography>
                <Button variant="contained" color="secondary">
                    Calculate delivery price
                </Button>
            </div>

            <div className={style.thirdBlock}>
                <Typography color='default' variant="display3">
                    Don't know where you parcel is?
                </Typography>
                <Typography color='default' variant="display3">
                    We allow to easily see it!
                </Typography>
                <Button variant="contained" color="secondary" onClick={() => props.login(true)}>
                    Track a parcel
                </Button>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    login: (isOpen) => dispatch(login(isOpen))
});

export const Layout = connect(null, mapDispatchToProps)(layout);