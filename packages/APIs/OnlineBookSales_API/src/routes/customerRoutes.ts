import express from "express";
import { registerCustomer, loginCustomer, getCustomerDetails, updatePassword, updateProfile, logoutCustomer, addFeedback } from "../controllers/customerController.js";
import { addTocart, getCartItems, deleteCartItem } from '../controllers/cartController.js';
import { isAuthenticatedUser, authorizeRoles } from "../middlewares/auth.js";


const router = express.Router();

router.route("/register").post(registerCustomer);

router.route("/login").post(loginCustomer);

router.route("/logout").post(isAuthenticatedUser, logoutCustomer)

router.route("/me").get(isAuthenticatedUser, getCustomerDetails);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);





//cart routes
//instead of sending user as req parameter we can send user id
router.route("/cart/add-product").post(addTocart);

router.route("/cart/remove-product").delete(deleteCartItem);

router.route("/cart").get(getCartItems);


//cart routes
//instead of sending user as req parameter we can send user id
router.route("/cart/add-product").post(isAuthenticatedUser,addTocart);

router.route("/cart/remove-product").delete(isAuthenticatedUser,deleteCartItem);

router.route("/cart").get(isAuthenticatedUser,getCartItems);


//giving feedback
router.route("/add-feedback").post(isAuthenticatedUser,addFeedback);

export default router