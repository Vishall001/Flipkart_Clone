import axios from "axios"
const  URL =`http://localhost:8080`;
export const authenticationSignup = async (data) => {
  try {
  return await  axios.post(`${URL}/signup`,data)
  } catch (err) {
    console.log("Error while calling signup api", err);
  }
};
