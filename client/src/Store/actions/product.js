import {
  GET_PRODUCT,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  url,
} from "../type";
import axios from "axios";

export function getProduct() {
  return (dispatch) => {
    axios({
      method: "get",
      url: `${url}/user/products`,
    })
      .then((response) => {
        const { data } = response;
        dispatch({
          type: GET_PRODUCT,
          payload: data.products,
        });
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
      });
  };
}

export function addProduct(payload) {
  return (dispatch) => {
    axios({
      method: "post",
      url: `${url}/admin/product`,
      headers: {
        access_token: localStorage.access_token,
      },
      data: payload,
    })
      .then((response) => {
        const { data } = response;
        dispatch({
          type: ADD_PRODUCT,
          payload: data,
        });
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
      });
  };
}

export function updateProduct(payload) {
  return (dispatch) => {
    axios({
      method: "PUT",
      url: `${url}/admin/product/${payload.id}`,
      headers: {
        access_token: localStorage.access_token,
      },
      data: payload,
    })
      .then((response) => {
        const { data } = response;
        dispatch({
          type: UPDATE_PRODUCT,
          payload: data,
        });
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
      });
  };
}

export function deleteProduct(payload) {
  return (dispatch) => {
    axios({
      method: "DELETE",
      url: `${url}/admin/product/${payload}`,
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((response) => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: {
            id: payload,
          },
        });
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
      });
  };
}
