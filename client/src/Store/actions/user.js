import { LOGIN, url } from "../type";
import axios from "axios";
import jwtDecode from "jwt-decode";

export function login(payload) {
  return (dispatch) => {
    return new Promise((res, rej) => {
      axios({
        method: "POST",
        url: `${url}/${payload.role}/login`,
        data: payload,
      })
        .then((response) => {
          const { data } = response;
          localStorage.setItem("access_token", data);
          const user = jwtDecode(data);
          dispatch({
            type: LOGIN,
            payload: user,
          });
          res();
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
          rej();
        });
    });
  };
}

export function register(payload) {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        url: `${url}/user/register`,
        data: payload,
      })
        .then((response) => {
          resolve();
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
          reject();
        });
    });
  };
}
