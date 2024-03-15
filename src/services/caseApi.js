import { toast } from "react-hot-toast";

import { apiConnector } from "./apiConnector";
import { caseEndpoints } from "../utils/api";

const {
  ADDCASE_API,
  GETCASE_API,
  ADDCLUE_API,
  ADDPERSON_API
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

export function newClue(id,formData, token, navigate) {
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


      navigate("/clue", { state: { id: id } })


    } catch (error) {
      console.log("New clue API ERROR............", error)
      toast.error("clue Added Failed")
    }

    toast.dismiss(toastId)
  }
}

export function newPerson(id,formData, token, navigate) {
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


