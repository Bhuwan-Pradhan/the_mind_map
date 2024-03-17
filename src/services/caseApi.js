import { toast } from "react-hot-toast";

import { apiConnector } from "./apiConnector";
import { caseEndpoints } from "../utils/api";

const {
  ADDCASE_API,
  UPDATECASE_API,
  DELETECASE_API,
  GETCASE_API,
  ADDCLUE_API,
  UPDATECLUE_API,
  DELETECLUE_API,
  ADDPERSON_API,
  UPDATEPERSON_API,
  DELETEPERSON_API,
  GETCLUE_API,
  GETPERSON_API,

} = caseEndpoints


export function newCase(formData, token, navigate) {
  return async () => {
    const toastId = toast.loading("Loading...")

    try {
      const response = await apiConnector("POST", ADDCASE_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        })

      console.log("NEWCASE API RESPONSE............", response);

      toast.success("Case Added Successful");


      navigate("/");


    } catch (error) {
      console.log("New case API ERROR............", error);
      toast.error("case Added Failed");
    }

    toast.dismiss(toastId)
  }
}


export const getUserCase = async (token) => {
  let result = null
  try {
    const response = await apiConnector("GET", GETCASE_API, token, {
      Authorization: `Bearer ${token}`,
    })
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch cases")
    }
    result = response?.data
  } catch (error) {
    console.log("GET_USER_CASE_API API ERROR............", error)
    toast.error(error.message)
  }
  return result;
}

export function newClue(caseId, formData, token, navigate) {
  return async () => {
    const toastId = toast.loading("Loading...")

    try {
      const response = await apiConnector("POST", ADDCLUE_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        })

      console.log("NEWCLUE API RESPONSE............", response)

      toast.success("Clue Added Successful")


      navigate("/clue", { state: { id: caseId } })


    } catch (error) {
      console.log("New clue API ERROR............", error)
      toast.error("clue Added Failed")
    }

    toast.dismiss(toastId)
  }
}

export function newPerson(id, formData, token, navigate) {
  return async () => {
    const toastId = toast.loading("Loading...")

    try {
      const response = await apiConnector("POST", ADDPERSON_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        })

      console.log("NEWPERSON API RESPONSE............", response)

      toast.success("Person Added Successful")


      navigate("/person", { state: { id: id } })


    } catch (error) {
      console.log("New Person API ERROR............", error)
      toast.error("Person Added Failed")
    }

    toast.dismiss(toastId)
  }
}


export const getCaseClue = async (caseId) => {
  let result = null
  try {
    console.log(caseId);
    const response = await apiConnector("POST", GETCLUE_API, { caseId })
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch clues")
    }
    result = response?.data
  } catch (error) {
    console.log("GET_CLUE_API API ERROR............", error)
    toast.error(error.message)
  }
  return result;
}


export const getCasePerson = async (caseId) => {
  let result = null
  try {
    console.log(caseId);
    const response = await apiConnector("POST", GETPERSON_API, { caseId })
    if (!response?.data?.success) {
      throw new Error("Could Not Fetch person")
    }
    result = response?.data
  } catch (error) {
    console.log("GET_PERSON_API API ERROR............", error)
    toast.error(error.message)
  }
  return result;
}

export function updateCase(formData, token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", UPDATECASE_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        })
      console.log("UPDATE CASE API RESPONSE............", response)



      toast.success("Udated Case Successful")

      navigate("/")


    } catch (error) {
      console.log("UPdate Case API ERROR............", error)
      toast.error("update Case Failed")
    }

    toast.dismiss(toastId)

  }

}


export function deleteCase(token, caseId) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")


    try {
      const response = await apiConnector("POST", DELETECASE_API, {
        caseId,
      }, {
        Authorization: `Bearer ${token}`,
      })

      console.log("DELETE CASE API RESPONSE............", response)



      toast.success("Case Deleted Successful")
    



    } catch (error) {
      console.log("Delete Case API ERROR............", error)
      toast.error("case deletation Failed")
    }


    toast.dismiss(toastId)

  }
}


export function updateClue(caseId, formData, token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", UPDATECLUE_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        })
      console.log("UPDATE CLUE API RESPONSE............", response)



      toast.success("Udated Clue Successful")

      navigate("/clue", { state: { id: caseId } })


    } catch (error) {
      console.log("Update Clue API ERROR............", error)
      toast.error("update Clue Failed")
    }

    toast.dismiss(toastId)

  }

}


export function deleteClue(token, clueId, caseId) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")


    try {
      const response = await apiConnector("POST", DELETECLUE_API, {
        clueId,
        caseId,
      }, {
        Authorization: `Bearer ${token}`,
      })

      console.log("DELETE CLUE API RESPONSE............", response)



      toast.success("Clue Deleted Successful")
      //dispatch(setToken(response.data.token))



    } catch (error) {
      console.log("Delete Clue API ERROR............", error)
      toast.error("clue deletation Failed")
    }


    toast.dismiss(toastId)

  }
}

export function updatePerson(caseId, formData, token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    try {
      const response = await apiConnector("POST", UPDATEPERSON_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        })
      console.log("UPDATE PERSON API RESPONSE............", response)



      toast.success("Udated Person Successful")

      navigate("/person", { state: { id: caseId } })


    } catch (error) {
      console.log("Update Person API ERROR............", error)
      toast.error("update Person Failed")
    }

    toast.dismiss(toastId)

  }

}


export function deletePerson(token, personId, caseId) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")


    try {
      const response = await apiConnector("POST", DELETEPERSON_API, {
        personId,
        caseId,
      }, {
        Authorization: `Bearer ${token}`,
      })

      console.log("DELETE PERSON API RESPONSE............", response)



      toast.success("Person Deleted Successful")
 



    } catch (error) {
      console.log("Delete Person API ERROR............", error)
      toast.error("person deletation Failed")
    }


    toast.dismiss(toastId)

  }
}
