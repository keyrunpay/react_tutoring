import Axios from "axios";

// const baseUrl = "https://9opesuegjh.execute-api.us-east-1.amazonaws.com";
const baseUrl = "https://reqres.in/api";

// export const fetchComments = () => {
//   return Axios.get(baseUrl + "/test");
// };

export const fetchUser = () => {
  return Axios.get(baseUrl + "/users");
};
