import React from 'react'
import DialogActions from "@material-ui/core/es/DialogActions/DialogActions";
import Button from "@material-ui/core/es/Button/Button";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import TextField from "@material-ui/core/es/TextField/TextField";
import {getSignupInfo, handleConfirmPassword, handleEmail, handlePassword, signup} from "../data/action-creators";
import connect from "react-redux/es/connect/connect";
import {SignupForm} from "./SignupForm";

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
                <SignupForm/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => props.signup(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() =>
                        props.getSignupInfo()} variant="contained" color="primary">
                        Sign up
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
    signupIsOpen: state.app.signupIsOpen
});

const mapDispatchToProps = (dispatch) => ({
    signup: (isOpen) => dispatch(signup(isOpen)),
    getSignupInfo: () => dispatch(getSignupInfo())
});

const SignupDialog = connect(mapStateToProps, mapDispatchToProps)(dialog);

export default SignupDialog;