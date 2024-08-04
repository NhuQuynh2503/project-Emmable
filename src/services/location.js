import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1"

export function locationCity () {
    return axios.get(`${BASE_URL}/location/cities`);
}

export function locationDistricts (cityId){
    return axios.get(`${BASE_URL}/location/cities/${cityId}/districts`);
}