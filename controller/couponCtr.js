const Coupon = require("../models/couponModel");
const validateMongoDbId = require("../utils/validateMongodbId");
const asyncHandler = require("express-async-handler");

// Create Coupon
const createCoupon = asyncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.json(newCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

// Get All Coupon
const getAllCoupons = asyncHandler(async (req, res) => {
  try {
    const allCoupon = await Coupon.find();
    res.json(allCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

// Get a Coupon
const getCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const coupon = await Coupon.findById(id);
    res.json(coupon);
  } catch (error) {
    throw new Error(error);
  }
});

// Update Coupon
const updateCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const updateCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

// Delete Coupon
const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const deleteCoupon = await Coupon.findByIdAndDelete(id);
    res.json(deleteCoupon);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createCoupon,
  getAllCoupons,
  getCoupon,
  updateCoupon,
  deleteCoupon,
};
