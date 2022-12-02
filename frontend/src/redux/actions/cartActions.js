import axios from "axios";
import * as actionTypes from "../constants/cartConstants";

const url = "https://backend-flipkart.onrender.com";
export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/product/${id}`);

    dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({ type: actionTypes.ADD_TO_CART_ERROR, payload: error.message });
  }
};

export const removedFromCart = (id) => (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
};
