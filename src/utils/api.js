const BASE_URL = "http://localhost:4000/api";

// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
}

// CASE ENDPOINTS
export const caseEndpoints = {
  ADDCASE_API: BASE_URL + "/case/addCase",
  ADDCLUE_API: BASE_URL + "/case/addClue",
  ADDPERSON_API: BASE_URL + "/case/addPerson",
}


 