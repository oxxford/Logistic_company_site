import {TYPES} from "./action-types";
var base64 = require('base-64');

const ip = "10.91.51.155:5000";

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

    fetch('http://' + ip + '/api/v1/auth', {
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
                userData: data,
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

export const getSignupInfo = () => (dispatch, getState) => {
    const values = getState().form.signup.values;

    if (values.passwordValue !== values.confirmPasswordValue)
        return;

    values['birth_date'] = 'Wed, 14 Nov 2018 00:00:00 GMT';

    const json = JSON.stringify(values);

    fetch('http://' + ip + '/api/v1/users', {
        headers: {
            'Authorization': 'Basic ' + base64.encode(getState().app.emailValue + ":" + getState().app.passwordValue),
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
                userData: data,
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

    fetch('http://' + ip + '/api/v1/price', {
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
                price: 0,
                price_error: "Network error"
            })
        });
};

export const profileRequest = () => (dispatch, getState) => {
    const json = JSON.stringify(getState().form.profile.values);
    console.log(json);

    //TODO
    fetch('http://' + ip + '/api/v1/user', {
        headers: {
            'Authorization': 'Basic ' + base64.encode(getState().app.emailValue + ":" + getState().app.passwordValue),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        },
        body: json,
        method: 'PUT'
    })
        .then(response => response.json())
        .then(data => {
                dispatch({
                    type: TYPES.PROFILE_REQUEST,
                    profile_updated: true,
                    userData: getState().form.profile.values
                })
        })
        .catch((error) => {
            dispatch({
                type: TYPES.PROFILE_REQUEST,
                profile_updated: false,
                profile_error: "Network error"
            })
        });
};


export const getParcelTracking = () => (dispatch, getState) => {

    fetch('http://' + ip + '/api/v1/track/' + getState().form.tracking.values.id, {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        },
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
                dispatch({
                    type: TYPES.TRACKING_REQUEST,
                    track_data: data[0],
                    track_successful: true
                })
        })
        .catch((error) => {
            console.log(error);

            dispatch({
                type: TYPES.TRACKING_REQUEST,
                track_successful: false,
                track_error: "Network error"
            })
        });
};


export const newOrderRequest = () => (dispatch, getState) => {
    const json = JSON.stringify({...getState().form.receiver.values, ...getState().form.calculate.values,
                                price: getState().app.price});
    console.log(json);

    fetch('http://' + ip + '/api/v1/orders', {
        headers: {
            'Authorization': 'Basic ' + base64.encode(getState().app.emailValue + ":" + getState().app.passwordValue),
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
                    type: TYPES.NEW_ORDER_REQUEST,
                    new_order_data: data,
                    new_order_successful: true
                })
        })
        .catch((error) => {
            console.log(error);

            dispatch({
                type: TYPES.NEW_ORDER_REQUEST,
                new_order_successful: false,
                new_order_error: "Network error"
            })
        });
};

export const ordersRequest = () => (dispatch, getState) => {
    console.log("orders");
    fetch('http://' + ip + '/api/v1/orders', {
        headers: {
            'Authorization': 'Basic ' + base64.encode(getState().app.emailValue + ":" + getState().app.passwordValue),
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        },
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: TYPES.ORDERS_REQUEST,
                orders_data: data,
                orders_successful: true
            })
        })
        .catch((error) => {
            console.log(error);

            dispatch({
                type: TYPES.ORDERS_REQUEST,
                orders_successful: false,
                orders_error: "Network error"
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
