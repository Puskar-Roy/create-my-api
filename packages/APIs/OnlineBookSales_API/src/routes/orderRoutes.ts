import express from "express";
import { newOrder, getSingleOrder, myOrders, updateOrder, deleteOrder } from "../controllers/orderController.js";
export const router = express.Router();

import { isAuthenticatedUser, authorizeRoles } from "../middlewares/auth.js";

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, myOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser,authorizeRoles('admin'),updateOrder)
  .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteOrder);

export default router;