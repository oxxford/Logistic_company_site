import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from "@material-ui/core/TextField/TextField";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";

const AdaptedTextField = ({input: {value, onChange}, ...custom}) => (
    <TextField
        value={value}
        onChange={onChange}
        {...custom}
    />
);

const DeliverySelect = ({input: {value, onChange}, ...custom}) => (
    <Select
        value={value}
        onChange={onChange}
        {...custom}
    >
        <MenuItem value={1}>OneDay</MenuItem>
        <MenuItem value={2}>TwoDays</MenuItem>
        <MenuItem value={5}>FiveDays</MenuItem>
    </Select>
);

const InsuranceSelect = ({input: {value, onChange}, ...custom}) => (
    <Select
        value={value}
        onChange={onChange}
        {...custom}
    >
        <MenuItem value={true}>Yes</MenuItem>
        <MenuItem value={false}>No</MenuItem>
    </Select>
);

const CalculateForm = () => (
    <form>
        <Field component={AdaptedTextField} name="from" label="From" margin="normal"/>
        <Field component={AdaptedTextField} name="to" label="To" margin="normal"/>
        <div>
            <Field component={AdaptedTextField} name="length" label="Length" margin="dense" helperText="In cm"/>
            <Field component={AdaptedTextField} name="width" label="Width" margin="dense" helperText="In cm"/>
            <Field component={AdaptedTextField} name="height" label="Height" margin="dense" helperText="In cm"/>
            <Field component={AdaptedTextField} name="weight" label="Weight" margin="dense" helperText="In kilograms"/>
        </div>
        <div>
            <Field component={DeliverySelect} name="delivery_type" label="Delivery type"/>
            <span style={{margin: 8}}/>
            <Field component={InsuranceSelect} name="insurance" label="Insurance"/>
        </div>
    </form>
);

export default reduxForm({form: 'calculate'})(CalculateForm);