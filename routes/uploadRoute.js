const express = require("express");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");

const {
  uploadPhoto,
  productImageResize,
} = require("../middlewares/uploadImages");

const router = express.Router();

const { uploadImages, deleteImages } = require("../controller/uploadCtr");

router.put(
  "/",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 10),
  productImageResize,
  uploadImages
);

router.delete("/delete-img/:id", authMiddleware, isAdmin, deleteImages);

module.exports = router;
