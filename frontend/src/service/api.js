import axios from "axios"
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

export  const authenticationSignup = async (user) => {
  console.log("USER DATA",user)
  try {
  return await  axios.post(`${url}/signup`, user)
  } catch (e){
    console.log(e)
  }
}
