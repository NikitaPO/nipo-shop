import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";

const CartScreen = ({ match, location }) => {
  const productId = match.params.id;
  const dispatch = useDispatch();
  const quantity = location.search ? +location.search.split("=")[1] : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  return <h1>Cart</h1>;
};

export default CartScreen;
