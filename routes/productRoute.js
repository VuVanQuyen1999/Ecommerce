const express = require("express");
const {
    createProduct,
    getAProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    addToWishlist,
    rating,
    uploadImages,
    deleteImages,
} = require("../controller/productCtr");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const {
    uploadPhoto,
    productImageResize,
} = require("../middlewares/uploadImages");

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);
router.put(
    "/upload/",
    authMiddleware,
    isAdmin,
    uploadPhoto.array("images", 10),
    productImageResize,
    uploadImages
);
router.get("/:id", getAProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);

router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);
router.get("/", getAllProduct);

module.exports = router;
