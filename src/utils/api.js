const BASE_URL = "http://localhost:4000/api";

// AUTH ENDPOINTS
export const endpoints = {
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
}

// CASE ENDPOINTS
export const caseEndpoints = {
  ADDCASE_API: BASE_URL + "/case/addCase",
  UPDATECASE_API: BASE_URL + "/case/updateCase",
  DELETECASE_API: BASE_URL + "/case/deleteCase",
  ADDCLUE_API: BASE_URL + "/case/addClue",
  UPDATECLUE_API: BASE_URL + "/case/updateClue",
  DELETECLUE_API: BASE_URL + "/case/deleteClue",
  ADDPERSON_API: BASE_URL + "/case/addPerson",
  UPDATEPERSON_API: BASE_URL + "/case/updatePerson",
  DELETEPERSON_API: BASE_URL + "/case/deletePerson",
  GETCASE_API: BASE_URL + "/case/getCase",
  GETCLUE_API: BASE_URL + "/case/getClue",
  GETPERSON_API: BASE_URL + "/case/getPerson",
  
}


 