import TextField from "@material-ui/core/TextField/TextField";
import React from "react";
import {Field, reduxForm} from "redux-form";

const AdaptedTextField = ({input: {value, onChange}, ...custom}) => (
    <TextField
        value={value}
        onChange={onChange}
        fullWidth
        variant="outlined"
        {...custom}
    />
);

const TrackingForm = () => (
    <form>
        <Field component={AdaptedTextField} name="id" label="Tracking number" margin="normal"/>
    </form>
);

export default reduxForm({form: 'tracking'})(TrackingForm);