import axios from "axios";
const BASE_URL = "http://localhost:5000/api/v1"

export function products(){
    return axios.get(`${BASE_URL}/products?page=1`)
}

export function categories(){
    return axios.get(`${BASE_URL}/products/categories`)
}

export function categoriesId(idCategori,page){
    return axios.get(`${BASE_URL}/products/categories/${idCategori}/products?page=${page}`)
}


export function productId(idProduct){
    return axios.get(`${BASE_URL}/products/${idProduct}`)
}