import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1"
export function loginApi(email, password) {
    return axios.post(`${BASE_URL}/auth/login`, {
        email: email,
        password: password
    })
}

export function registerApi(name,email,password,confirm_password){
    return axios.post( `${BASE_URL}/auth/register`,{
        name: name,
        email: email,
        password: password,
        confirm_password: confirm_password
    })
}

export function forgotPasswordApi(email){
    return axios.post(`${BASE_URL}/auth/forgot-password`,{
        email: email
    })
}

export function resetPasswordApi(password,confirm_password,reset_token){
    return axios.post(`${BASE_URL}/auth/reset-password`,{
        password: password,
        confirm_password: confirm_password,
        reset_token: reset_token
    })
}