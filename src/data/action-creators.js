import {TYPES} from "./action-types";
import axios from "axios";

export const login = (loginIsOpen) => {
    return {
        type: TYPES.LOGIN_DIALOG,
        loginIsOpen: loginIsOpen
    }
};

export const signup = (signupIsOpen) => {
    return {
        type: TYPES.SIGN_UP_DIALOG,
        signupIsOpen: signupIsOpen
    }
};

export const getLoginInfo = (dispatch, emailValue, passwordValue) => {
    const json = '{ "email": "' + emailValue + '", "password": "' + passwordValue + '" }';
    console.log(json);
    fetch('http://10.91.50.55:5000/', {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        },
        body: JSON.stringify(json),
        method: 'POST'
    }).then((response) => {
            console.log(response.data);
            dispatch({
                type: TYPES.LOGIN_REQUEST,
                data: Object.values(response.data)
            });
        })
        .catch((e) => {
            console.log(e.message)
        });
};

export const getSignupInfo = (dispatch) => {
    axios.post('http://10.91.50.55:5000/signup', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
        .then((response) => {
            dispatch({
                type: TYPES.SIGN_UP_REQUEST,
                data: Object.values(response.data)
            })
        })
        .catch((e) => {
            console.log("error")
        });
};

export const handleEmail = (value) => {
    return {
        type: TYPES.EMAIL_VALUE,
        value
    }
};

export const handlePassword = (value) => {
    return {
        type: TYPES.PASSWORD_VALUE,
        value
    }
};

export const handleConfirmPassword = (value) => {
    return {
        type: TYPES.CONFIRM_PASSWORD_VALUE,
        value
    }
};