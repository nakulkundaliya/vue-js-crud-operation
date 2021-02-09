const PrincipleModel = require('../models/PrincipleModel');
const { body, check, validationResult } = require('express-validator');
//helper file to prepare responses.
const apiResponse = require('../helpers/apiResponse');
require('dotenv').config();

exports.create = [
  // Validate fields.
  body('principle')
    .isLength({ min: 1 })
    .trim()
    .withMessage('Principle must be specified.'),

  check('principle').escape(),

  async (req, res) => {
    try {
      // Extract the validation errors from a request.
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // Display sanitized values/errors messages.
        return apiResponse.validationError(res, errors.array()[0].msg, null);
      } else {
        const principle = new PrincipleModel({
          name: req.body.principle,
        });

        const savePrinciple = await principle.save();
        const result = await PrincipleModel.findOne({ _id: savePrinciple._id });
        return apiResponse.successResponseWithData(
          res,
          'principle created successfully.',
          result
        );
      }
    } catch (error) {
      console.log(error);
      //throw error in json response with status 500.
      return res.status(500).send({
        status: false,
        message: error.message,
        data: null,
      });
    }
  },
];

exports.update = [
  async (req, res) => {
    try {
      // Extract the validation errors from a request.
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // Display sanitized values/errors messages.
        return apiResponse.validationError(res, errors.array()[0].msg, null);
      } else {
        const Id = req.query.id;
        const principle = req.body.principle;

        const checkPrincipleExist = await PrincipleModel.findById(Id);
        if (checkPrincipleExist) {
          const updatePrinciple = await PrincipleModel.findByIdAndUpdate(
            Id,
            { $set: { name: principle || checkPrincipleExist.principle } },
            { new: true }
          );
          return apiResponse.successResponseWithData(
            res,
            'principle updated successfully.',
            updatePrinciple
          );
        } else {
          return apiResponse.validationError(
            res,
            "principle doesn't exists.",
            null
          );
        }
      }
    } catch (error) {
      console.log(error);
      //throw error in json response with status 500.
      return apiResponse.ErrorResponse(res, error.message);
    }
  },
];

exports.list = [
  async (req, res) => {
    try {
      // Extract the validation errors from a request.
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // Display sanitized values/errors messages.
        return apiResponse.validationError(res, errors.array()[0].msg, null);
      } else {
        const page = parseInt(req.query.page);
        const count = parseInt(req.query.count);

        const listPrinciples = await PrincipleModel.find()
          .skip((page - 1) * count)
          .limit(count);
        return apiResponse.successResponseWithData(
          res,
          'List of principles.',
          listPrinciples
        );
      }
    } catch (error) {
      console.log(error);
      //throw error in json response with status 500.
      return apiResponse.ErrorResponse(res, error.message);
    }
  },
];

exports.delete = [
  async (req, res) => {
    try {
      // Extract the validation errors from a request.
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // Display sanitized values/errors messages.
        return apiResponse.validationError(res, errors.array()[0].msg, null);
      } else {
        const Id = req.query.id;

        const checkPrincipleExist = await PrincipleModel.findById(Id);
        if (checkPrincipleExist) {
          const deletePrinciple = await PrincipleModel.deleteOne({ _id: Id });
          return apiResponse.successResponseWithData(
            res,
            `Principle with id: ${Id} deleted successfully.`,
            deletePrinciple
          );
        } else {
          return apiResponse.validationError(
            res,
            "principle doesn't exists.",
            null
          );
        }
      }
    } catch (error) {
      console.log(error);
      //throw error in json response with status 500.
      return apiResponse.ErrorResponse(res, error.message);
    }
  },
];
