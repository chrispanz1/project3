import axios from "axios";
import sendRequest from "./Send-request";
import { getToken } from './users-service';
const BASE_URL = '/api/users';

export function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData);
}
export function update(userData) {
  //console.log("users-api",userData)
  return sendRequest(`${BASE_URL}/update`, 'PUT', userData);
}
export function getUserDb(id) { 
  
  
  return sendRequest(`${BASE_URL}/dbUser`,'POST',id);
}
export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
  }
  
  