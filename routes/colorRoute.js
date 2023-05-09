const express = require("express");
const {
    prodCreateColor,
    updateColor,
    deleteColor,
    getColor,
    getAllColor,
} = require("../controller/colorCtr");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, prodCreateColor);
router.put("/:id", authMiddleware, isAdmin, updateColor);
router.delete("/:id", authMiddleware, isAdmin, deleteColor);
router.get("/:id", getColor);
router.get("/", getAllColor);

module.exports = router;
