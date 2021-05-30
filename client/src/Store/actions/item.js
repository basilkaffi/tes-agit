import {
  GET_ITEM,
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  DELETE_BULK_ITEM,
  CHANGE_TOTAL_PRODUCT,
  url,
} from "../type";
import axios from "axios";

export function getItem() {
  return (dispatch) => {
    axios({
      method: "get",
      url: `${url}/user/items`,
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((response) => {
        const { data } = response;
        dispatch({
          type: GET_ITEM,
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

export function addItem(payload) {
  return (dispatch) => {
    return new Promise((res, rej) => {
      axios({
        method: "post",
        url: `${url}/user/item`,
        headers: {
          access_token: localStorage.access_token,
        },
        data: payload,
      })
        .then((response) => {
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
        });
    });
  };
}

export function updateItem(payload) {
  return (dispatch) => {
    axios({
      method: "PATCH",
      url: `${url}/user/item/${payload.id}`,
      headers: {
        access_token: localStorage.access_token,
      },
      data: payload,
    })
      .then((response) => {
        dispatch({
          type: UPDATE_ITEM,
          payload: {
            id: payload.id,
            total: payload.total,
          },
        });
        dispatch({
          type: CHANGE_TOTAL_PRODUCT,
          payload: payload,
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

export function deleteItem(payload) {
  return (dispatch) => {
    axios({
      method: "DELETE",
      url: `${url}/user/item/${payload}`,
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        dispatch({
          type: DELETE_ITEM,
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

export function bulkDeleteItem() {
  return (dispatch) => {
    axios({
      method: "DELETE",
      url: `${url}/user/items`,
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        dispatch({
          type: DELETE_BULK_ITEM,
          payload: null,
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
