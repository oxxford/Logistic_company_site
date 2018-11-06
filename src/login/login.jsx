import React from 'react'
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import Button from "@material-ui/core/es/Button/Button";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import TextField from "@material-ui/core/es/TextField/TextField";
import {getLoginInfo, handleEmail, handlePassword, login, signup} from "../data/action-creators";
import connect from "react-redux/es/connect/connect";
import style from './login.css';
import Redirect from "react-router-dom/es/Redirect";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";

const loginResponse = (props) => {
    return (
        props.authorized ? (
            <Redirect to='profile'/>
        ) : (
            <DialogContentText style={{ color: '#ff0e0b' }}>
                Unsuccessful login
            </DialogContentText>
        )
    )
};

const dialog = (props) => {
    console.log('rednedr');
    return (
        <React.Fragment>
            <Dialog
                open={props.loginIsOpen}
                onClose={() => props.login(false)}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title" align="center">Login</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        required="true"
                        value={props.emailValue}
                        onChange={props.handleEmail}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        required="true"
                        value={props.passwordValue}
                        onChange={props.handlePassword}
                    />

                    {props.authorized !== undefined &&
                        loginResponse(props)
                    }

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.signup(true)} variant="contained" color="primary" className={style.signUpButton}>
                        Sing Up
                    </Button>
                    <span className={style.appBarButtonSpacer}/>
                    <Button onClick={() => props.login(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => props.getLoginInfo(props.emailValue, props.passwordValue)} color="primary">
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
    loginIsOpen: state.loginIsOpen,
    emailValue: state.emailValue,
    passwordValue: state.passwordValue,
    authorized: state.authorized
});

const mapDispatchToProps = (dispatch) => ({
    login: (isOpen) => dispatch(login(isOpen)),
    signup: (isOpen) => dispatch(signup(isOpen)),
    getLoginInfo: (emailValue, passwordValue) => getLoginInfo(dispatch, emailValue, passwordValue),
    handleEmail: (e) => dispatch(handleEmail(e.target.value)),
    handlePassword: (e) => dispatch(handlePassword(e.target.value))
});

const LoginDialog = connect(mapStateToProps, mapDispatchToProps)(dialog);

export default LoginDialog;