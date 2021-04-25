import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";

//@desc   Create a new order
//@route  POST /api/orders
//@access Private

const createOrder = asyncHandler(async (req, res) => {
  let { user, orderItems, totalPrice } = req.body;

  console.log("createOrder");

  const order = await Order.create({
    user,
    orderItems,
    totalPrice,
  });

  console.log("order -> ", order);

  if (order) {
    res.status(201).json({
      _id: order._id,
      user: user._id,
      orderItems: order.orderItems,
      totalPrice: order.totalPrice,
    });
  } else {
    res.status(400);
    throw new Error("Invalid order data");
  }
});

//@desc   Get orders
//@route  GeT /api/orders
//@access Private

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

export { createOrder, getOrders };
