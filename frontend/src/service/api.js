import axios from "axios";
const url = "http://localhost:8000";
// export const authenticationSignup = async (user) => {
//   fetch(`${url}/signup`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       return result;
//     })
//     .catch((error) => console.log("error", error));
// };

export const authenticationSignup = async (user) => {
  // console.log("USER DATA", user);
  try {
    return await axios.post(`${url}/signup`, user);
  } catch (e) {
    console.log(e);
  }
};

// export const authenticationLogin = async (user) => {
//   console.log("USER DATA", user);
//   try {
//     return await axios.post(`${url}/login`, user);
//   } catch (e) {
//     console.log(e);
//     return e.res;
//   }
// };


export const authenticationLogin = async (user) => {
    console.log("USER DATA", user);
  try {
      return await axios.post(`${url}/login`, user)
  } catch (error) {
      console.log('Error while calling login API: ', error);
  }
}