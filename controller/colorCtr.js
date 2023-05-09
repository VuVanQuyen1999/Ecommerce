const Color = require("../models/colorModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

// Create Color
const prodCreateColor = asyncHandler(async (req, res) => {
    try {
        const newColor = await Color.create(req.body);
        res.json(newColor);
    } catch (error) {
        throw new Error(error);
    }
});

// Update Color
const updateColor = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updateColor = await Color.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateColor);
    } catch (error) {
        throw new Error(error);
    }
});

// Delete Color
const deleteColor = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deleteColor = await Color.findByIdAndDelete(id);
        res.json(deleteColor);
    } catch (error) {
        throw new Error(error);
    }
});

// Get a Color
const getColor = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getColor = await Color.findById(id);
        res.json(getColor);
    } catch (error) {
        throw new Error(error);
    }
});

// Get all Color
const getAllColor = asyncHandler(async (req, res) => {
    try {
        const getAllColor = await Color.find();
        res.json(getAllColor);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    prodCreateColor,
    updateColor,
    deleteColor,
    getColor,
    getAllColor,
};
