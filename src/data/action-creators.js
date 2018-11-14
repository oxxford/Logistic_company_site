import {TYPES} from "./action-types";
var base64 = require('base-64');

const ip = "";

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

    fetch('http://' + ip + '/api/v1/users', {
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
            if (data.success)
                dispatch({
                    type: TYPES.PRICE_CALCULATION_REQUEST,
                    price: data.price
                });
            else
                dispatch({
                    type: TYPES.PRICE_CALCULATION_REQUEST,
                    price: 0,
                    price_error: data.error
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

    fetch('http://' + ip + '/api/v1/price', {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        },
        body: json,
        method: 'PUT'
    })
        .then(response => response.json())
        .then(data => {
            if (data.success)
                dispatch({
                    type: TYPES.PROFILE_REQUEST,
                    profile_updated: true,
                    userData: getState().form.profile.values
                });
            else
                dispatch({
                    type: TYPES.PROFILE_REQUEST,
                    profile_updated: false,
                    profile_error: data.error
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
    const json = JSON.stringify(getState().form.tracking.values);

    fetch('http://' + ip + '/api/v1/track', {
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
            if (data.success)
                dispatch({
                    type: TYPES.TRACKING_REQUEST,
                    track_data: data.track_data,
                    track_successful: true
                });
            else
                dispatch({
                    type: TYPES.TRACKING_REQUEST,
                    track_error: data.error,
                    track_successful: false
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
    const json = JSON.stringify({...getState().form.receiver.values, ...getState().form.calculate.values});
    console.log(json);

    fetch('http://' + ip + '/api/v1/newOrder', {
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
            if (data.success)
                dispatch({
                    type: TYPES.NEW_ORDER_REQUEST,
                    new_order_data: data.track_data,
                    new_order_successful: true
                });
            else
                dispatch({
                    type: TYPES.NEW_ORDER_REQUEST,
                    new_order_error: data.error,
                    new_order_successful: false
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
    fetch('http://' + ip + '/api/v1/orders', {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        },
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            if (data.success)
                dispatch({
                    type: TYPES.ORDERS_REQUEST,
                    orders_data: data.data,
                    orders_successful: true
                });
            else
                dispatch({
                    type: TYPES.ORDERS_REQUEST,
                    orders_error: data.error,
                    orders_successful: false
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
