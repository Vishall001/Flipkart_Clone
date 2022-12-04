import axios from "axios";
const url = "https://flipkart-backend-w032.onrender.com";

export const authenticationSignup = async (user) => {
  try {
    return await axios.post(`${url}/signup`, user);
  } catch (e) {
    console.log(e);
  }
};

export const authenticationLogin = async (user) => {
  console.log("USER DATA", user);
  try {
    return await axios.post(`${url}/login`, user);
  } catch (error) {
    console.log("Error while calling login API: ", error);
  }
};

