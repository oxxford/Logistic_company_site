import {TYPES} from "./action-types";
import axios from "axios";

export const login = (isOpen) => {
    return {
        type: TYPES.LOGIN,
        isOpen
    }
};

export const getInfo = (dispatch) => {
    axios.get('http://localhost:8090/api/getusername')
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