import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from "@material-ui/core/TextField/TextField";
import connect from "react-redux/es/connect/connect";

const AdaptedTextField = ({input: {value, onChange}, ...custom}) => (
    <TextField
        value={value}
        onChange={onChange}
        {...custom}
        style={{width: 500}}
    />
);

const form = () => (
    <form>
        <div>
            <Field component={AdaptedTextField} name="login" label="Login" margin="dense"/>
        </div>
        <div>
            <Field component={AdaptedTextField} name="name" label="Name" margin="dense"/>
        </div>
        <div>
            <Field component={AdaptedTextField} name="surname" label="Surname" margin="dense"/>
        </div>
        <div>
            <Field component={AdaptedTextField} name="email" label="Email" margin="dense"/>
        </div>
        <div>
            <Field component={AdaptedTextField} name="address" label="Address" margin="dense"/>
        </div>
        <div>
            <Field component={AdaptedTextField} name="postcode" label="Postcode" margin="dense"/>
        </div>

    </form>
);

const ProfileForm = reduxForm({form: 'profile'})(form);

const mapStateToProps = (state) => ({
    userData: state.userData
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
