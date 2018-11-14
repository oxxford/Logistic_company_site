import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from "@material-ui/core/TextField/TextField";

const AdaptedTextField = ({input: {value, onChange}, ...custom}) => (
    <TextField
        value={value}
        onChange={onChange}
        {...custom}
        style={{width: 400}}
    />
);

const form = () => (
    <form>
        <div>
            <Field component={AdaptedTextField} name="email" label="Email" margin="dense"/>
        </div>
        <div>
            <Field component={AdaptedTextField} name="password" label="Password" margin="dense"/>
        </div>
        <div>
            <Field component={AdaptedTextField} name="confirmPassword" label="Confirm Password" margin="dense"/>
        </div>
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
            <Field component={AdaptedTextField} name="phone_number" label="Phone number" margin="dense" type="tel"/>
        </div>
    </form>
);

export const SignupForm = reduxForm({form: 'signup'})(form);

