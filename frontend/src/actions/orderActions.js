import axios from "axios";
import {
  ORDER_LIST_FAIL,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_REQUEST,
} from "../constans/orderConstans";
import { getUserInfoFromLocalStorage } from "../utils/getUserInfo";

export const listOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST });
    const userInfo = getUserInfoFromLocalStorage();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userInfo.token,
      },
    };
    const { data } = await axios.get("/api/orders", config);
    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createOrder = (cartItems) => async (dispatch) => {
  try {
    const orderItems = cartItems.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      image: item.image,
      price: item.price,
      product: item.product,
    }));

    const userInfo = getUserInfoFromLocalStorage();
    dispatch({ type: ORDER_CREATE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + userInfo.token,
      },
    };

    const totalPrice = orderItems.reduce(
      (sum, item) => (sum += item.quantity * item.price),
      0
    );

    const orderData = {
      user: userInfo._id,
      totalPrice,
      orderItems,
    };

    console.log(orderItems);
    console.log(orderData);

    const { data } = await axios.post("/api/orders", orderData, config);

    dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
