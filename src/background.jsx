import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";

import style from './layout.css'
import {login} from "./data/action-creators";
import connect from "react-redux/es/connect/connect";

const background = (props) => {
    return (
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
    )
};


const mapDispatchToProps = (dispatch) => ({
    login: (isOpen) => dispatch(login(isOpen))
});

export const Background = connect(null, mapDispatchToProps)(background);