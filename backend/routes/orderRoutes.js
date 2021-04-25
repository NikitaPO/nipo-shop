import express from "express";
import { createOrder, getOrders } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getOrders).post(protect, createOrder);

// router.post("/", registerUser);
// router.post("/login", authUser);
// router
//   .route("/profile")
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile);

export default router;
