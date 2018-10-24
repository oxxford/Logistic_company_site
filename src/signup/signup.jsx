import React from 'react'
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import Button from "@material-ui/core/es/Button/Button";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import TextField from "@material-ui/core/es/TextField/TextField";
import {getSignupInfo, handleConfirmPassword, handleEmail, handlePassword, signup} from "../data/action-creators";
import connect from "react-redux/es/connect/connect";

const dialog = (props) => {
    return (
        <React.Fragment>
            <Dialog
                open={props.signupIsOpen}
                onClose={() => props.signup(false)}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title" align="center">Sign up</DialogTitle>
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

                    <TextField
                        autoFocus
                        margin="dense"
                        id="confirm password"
                        label="Confirm the password"
                        type="password"
                        fullWidth
                        required="true"
                        value={props.confirmPasswordValue}
                        onChange={props.handleConfirmPassword}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.signup(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() =>
                        props.getSignupInfo(props.emailValue, props.passwordValue, props.confirmPasswordValue)} color="primary">
                        Sign up
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
    signupIsOpen: state.signupIsOpen,
    emailValue: state.emailValue,
    passwordValue: state.passwordValue,
    confirmPasswordValue: state.confirmPasswordValue
});

const mapDispatchToProps = (dispatch) => ({
    signup: (isOpen) => dispatch(signup(isOpen)),
    getSignupInfo: (emailValue, passwordValue, confirmPasswordValue) =>
        getSignupInfo(dispatch, emailValue, passwordValue, confirmPasswordValue),
    handleEmail: (e) => dispatch(handleEmail(e.target.value)),
    handlePassword: (e) => dispatch(handlePassword(e.target.value)),
    handleConfirmPassword: (e) => dispatch(handleConfirmPassword(e.target.value))
});

const SignupDialog = connect(mapStateToProps, mapDispatchToProps)(dialog);

export default SignupDialog;