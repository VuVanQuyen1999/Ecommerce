const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getAllUsers,
  getAUser,
  deleteAUser,
  updatedUSer,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  createOrder,
  removeProductFromCart,
  updateProductQuantityFromCart,
  getMyOrders,
  getMonthWiseOrderIncome,
  getMonthWiseOrderCount,
  getYearlyTotalOrders,
  getAllOrders,
  getSingleOrder,
  updateOrder,
  emptyCart,
} = require("../controller/userCtr");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { checkout, paymentVerification } = require("../controller/paymentCtrr");

const router = express.Router();

router.post("/register", createUser);
// router.put(
//   "/order/update-order/:id",
//   authMiddleware,
//   isAdmin,
//   updateOrderStatus
// );
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/password", authMiddleware, updatePassword);

router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiddleware, userCart);
router.post("/order/checkout", authMiddleware, checkout);
router.post("/order/paymentVerification", authMiddleware, paymentVerification);
// router.post("/cart/apply-coupon", authMiddleware, applyCoupon);
router.post("/cart/create-order", authMiddleware, createOrder);
router.get("/all-users", getAllUsers);
router.get("/getmyorders", authMiddleware, getMyOrders);

// router.get("/get-orders", authMiddleware, getOrders);
router.get("/get-all-orders", authMiddleware, isAdmin, getAllOrders);
router.get("/get-order/:id", authMiddleware, isAdmin, getSingleOrder);
router.put("/update-order/:id", authMiddleware, isAdmin, updateOrder);
// router.post(
//   "/get-order-by-user/:id",
//   authMiddleware,
//   isAdmin,
//   getOrderByUserId
// );
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/cart", authMiddleware, getUserCart);
router.get("/getMonthWiseOrderIncome", authMiddleware, getMonthWiseOrderIncome);
router.get("/getYearlyTotalOrders", authMiddleware, getYearlyTotalOrders);

router.get("/wishlist", authMiddleware, getWishlist);
router.get("/:id", authMiddleware, isAdmin, getAUser);
// router.delete("/empty-cart", authMiddleware, emptyCart);
router.delete(
  "/delete-product-cart/:cartItemId",
  authMiddleware,
  removeProductFromCart
);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.put(
  "/update-product-cart/:cartItemId/:newQuantity",
  authMiddleware,
  updateProductQuantityFromCart
);
router.delete("/:id", authMiddleware, isAdmin, deleteAUser);

router.put("/edit-user", authMiddleware, updatedUSer);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
