import React from 'react'
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import Button from "@material-ui/core/es/Button/Button";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import TextField from "@material-ui/core/es/TextField/TextField";
import {getInfo, handleEmail, handlePassword, login} from "../../data/action-creators";
import connect from "react-redux/es/connect/connect";
import style from './login.css';
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";

const dialog = (props) => {
    return (
        <React.Fragment>
            <Dialog
                open={props.isOpen}
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

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.login(false)} variant="contained" color="primary" className={style.signUpButton}>
                        Sing Up
                    </Button>
                    <span className={style.appBarButtonSpacer}/>
                    <Button onClick={() => props.login(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={props.getInfo} color="primary">
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
    isOpen: state.isOpen,
    data: state.data,
    emailValue: state.emailValue,
    passwordValue: state.passwordValue
});

const mapDispatchToProps = (dispatch) => ({
    login: (isOpen) => dispatch(login(isOpen)),
    getInfo: () => getInfo(dispatch),
    handleEmail: (e) => dispatch(handleEmail(e.target.value)),
    handlePassword: (e) => dispatch(handlePassword(e.target.value))
});

const LoginDialog = connect(mapStateToProps, mapDispatchToProps)(dialog);

export default LoginDialog;