import React from 'react'
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import Button from "@material-ui/core/es/Button/Button";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import TextField from "@material-ui/core/es/TextField/TextField";
import {getLoginInfo, handleEmail, handlePassword, login} from "../data/action-creators";
import connect from "react-redux/es/connect/connect";
import style from './about.css'
import Form from "../calculator/Form";

export const About = () => {
    return (
        <React.Fragment>
            <div className={style.about}>
                About
            </div>
        </React.Fragment>
    );
};