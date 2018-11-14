import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from "@material-ui/core/TextField/TextField";
import connect from "react-redux/es/connect/connect";

const AdaptedTextField = ({input: {value, onChange}, ...custom}) => (
    <TextField
        value={value}
        onChange={onChange}
        {...custom}
        style={{width: 400}}
    />
);

const form = (props) => (
    <form>
        <div>
            <Field component={AdaptedTextField} name="login" label="Login" margin="dense" defaultValue={props.userData.login}/>
        </div>
        <div>
            <Field component={AdaptedTextField} name="name" label="Name" margin="dense" defaultValue={props.userData.name}/>
        </div>
        <div>
            <Field component={AdaptedTextField} name="surname" label="Surname" margin="dense" defaultValue={props.userData.surname}/>
        </div>
        <div>
            <Field component={AdaptedTextField} name="email" label="Email" margin="dense" defaultValue={props.userData.email}/>
        </div>
        <div>
            <Field component={AdaptedTextField} name="address" label="Address" margin="dense" defaultValue={props.userData.address}/>
        </div>
        <div>
            <Field component={AdaptedTextField} name="birth_date" label="Birth date" margin="dense" defaultValue={props.userData.birth_date}/>
        </div>
        <div>
            <Field component={AdaptedTextField} name="phone" label="Phone number" margin="dense" type="tel"  defaultValue={props.userData.phone}/>
        </div>

    </form>
);

const ProfileForm = reduxForm({form: 'profile'})(form);

const mapStateToProps = (state) => ({
    userData: state.app.userData
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
