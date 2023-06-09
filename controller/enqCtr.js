const Enquiry = require("../models/enqModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

// Create Enquiry
const prodCreateEnquiry = asyncHandler(async (req, res) => {
    try {
        const newEnquiry = await Enquiry.create(req.body);
        res.json(newEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

// Update Enquiry
const updateEnquiry = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updateEnquiry = await Enquiry.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

// Delete Enquiry
const deleteEnquiry = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deleteEnquiry = await Enquiry.findByIdAndDelete(id);
        res.json(deleteEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

// Get a Enquiry
const getEnquiry = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getEnquiry = await Enquiry.findById(id);
        res.json(getEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

// Get all Enquiry
const getAllEnquiry = asyncHandler(async (req, res) => {
    try {
        const getAllEnquiry = await Enquiry.find();
        res.json(getAllEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = {
    prodCreateEnquiry,
    updateEnquiry,
    deleteEnquiry,
    getEnquiry,
    getAllEnquiry,
};
