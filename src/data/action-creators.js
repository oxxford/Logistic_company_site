import {TYPES} from "./action-types";
var base64 = require('base-64');

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

    fetch('http://10.91.51.78:5000/api/v1/auth', {
        headers: {
            'Authorization': 'Basic ' + base64.encode(emailValue + ":" + passwordValue),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        },
        body: json,
        method: 'POST'
    })
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: TYPES.LOGIN_REQUEST,
                userData: data.userData,
                authorized: true,
                loginIsOpen: false
            })
        })
        .catch((error) => {
            console.log(error);

            dispatch({
                type: TYPES.LOGIN_REQUEST,
                authorized: false,
                loginIsOpen: true
            })
        });
};

export const getSignupInfo = (dispatch, emailValue, passwordValue, confirmPasswordValue) => {
    if (passwordValue !== confirmPasswordValue)
        return;

    const json = '{ "email": "' + emailValue + '", "password": "' + passwordValue + '", ' +
        '"login": "login1", "name": "name", "surname": "surname", "birth_date": "01.01.2018"}';

    fetch('http://10.91.51.78:5000/api/v1/users', {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        },
        body: json,
        method: 'POST'
    })
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: TYPES.SIGN_UP_REQUEST,
                userData: data.userData,
                authorized: true,
                signupIsOpen: false
            })
        })
        .catch((error) => {
            console.log(error);

            dispatch({
                type: TYPES.SIGN_UP_REQUEST,
                authorized: false,
                signupIsOpen: true
            })
        });
};

export const calculateRequest = () => (dispatch, getState) => {
    const json = JSON.stringify(getState().form.calculate.values);
    console.log(json);

    fetch('http://10.91.51.78:5000/api/v1/price', {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        },
        body: json,
        method: 'POST'
    })
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: TYPES.PRICE_CALCULATION_REQUEST,
                price: data.price
            })
        })
        .catch((error) => {
            dispatch({
                type: TYPES.PRICE_CALCULATION_REQUEST,
                price: 0
            })
        });
};

export const profileRequest = () => (dispatch, getState) => {
    const json = JSON.stringify(getState().form.profile.values);
    console.log(json);

    fetch('http://10.91.51.7:5000/api/v1/price', {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        },
        body: json,
        method: 'POST'
    })
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: TYPES.PROFILE_REQUEST,
                profile_updated: true
            })
        })
        .catch((error) => {
            dispatch({
                type: TYPES.PROFILE_REQUEST,
                profile_updated: false
            })
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
