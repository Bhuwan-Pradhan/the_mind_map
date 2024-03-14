import { toast } from "react-hot-toast";

import { apiConnector } from "./apiConnector";
import { caseEndpoints } from "../utils/api";

const {
  ADDCASE_API,
} = caseEndpoints


export function newCase(formData, token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    
    try {
      const response = await apiConnector("POST", ADDCASE_API, 
        formData,
      {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      })

      console.log("NEWCASE API RESPONSE............", response)

      toast.success("Case Added Successful")


navigate("/")

     
    } catch (error) {
      console.log("New case API ERROR............", error)
      toast.error("case Added Failed")
    }

    toast.dismiss(toastId)
  }
}


