import axios from "axios";
const url = "http://localhost:8000";

export const authenticationSignup = async (user) => {
  // console.log("USER DATA", user);
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

export const payWithPaytm = async (data) => {
  try {
    let res = await axios.post(`${url}/payment`, data);
    return res.data;
  } catch (err) {
    console.log(`Error while calling paytm api`);
  }
};
