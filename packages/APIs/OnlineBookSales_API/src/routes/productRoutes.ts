import express from "express";
import { createProduct, getAdminProducts, getProductDetails, getShareableLink, updateProduct, deleteProduct, searchProduct, filterProduct } from "../controllers/productController.js";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth.js";

const router = express.Router();

router
  .route("/admin/product/new")
  .post(isAuthenticatedUser,authorizeRoles('admin'),createProduct);

  router
  .route("/admin/products")
  .get(isAuthenticatedUser,authorizeRoles('admin'),getAdminProducts);

  router.route("/product/:id").get(getProductDetails);
  router.route("/producturl/:id").get(getShareableLink);

  router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser,authorizeRoles('admin'),updateProduct)
  .delete(isAuthenticatedUser,authorizeRoles('admin'),deleteProduct);



  router.route("/product/search/:id").get(searchProduct);
  router.route("/product").get(filterProduct);
  
export default router;
