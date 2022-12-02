import axios from "axios";
import * as actionTypes from "../constants/productConstant";

const url = "https://backend-flipkart.onrender.com";
export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/products`);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: err.message });
  }
};

export const getProductsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST });

    const { data } = await axios.get(`${url}/product/${id}`);
    dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_DETAILS_FAIL,
      payload: err.message,
    });
  }
};
