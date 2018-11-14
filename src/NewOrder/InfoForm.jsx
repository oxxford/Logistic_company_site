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
            <Field component={AdaptedTextField} name="name" label="Receiver name" margin="dense"/>
        </div>
        <div>
            <Field component={AdaptedTextField} name="surname" label="Receiver surname" margin="dense"/>
        </div>
        <div>
            <Field component={AdaptedTextField} name="phone" label="Receiver phone" margin="dense"/>
        </div>
        <div>
            <Field component={AdaptedTextField} name="comment" label="Any comments" margin="dense"/>
        </div>
    </form>
);

export const InfoForm = reduxForm({form: 'receiver'})(form);

