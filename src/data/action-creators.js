import {TYPES} from "./action-types";
import axios from "axios";

export const login = (loginIsOpen) => {
    return {
        type: TYPES.LOGIN_DIALOG,
        isOpen: loginIsOpen
    }
};

export const signup = (signupIsOpen) => {
    return {
        type: TYPES.SIGN_UP_DIALOG,
        isOpen: signupIsOpen
    }
};

export const getInfo = (dispatch) => {
    axios.post('http://localhost:8090/login', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
        .then((response) => {
            dispatch({
                type: TYPES.LOGIN_REQUEST,
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