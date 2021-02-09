const ValueModel = require('../models/ValueModel');
const { body, check, validationResult } = require('express-validator');
//helper file to prepare responses.
const apiResponse = require('../helpers/apiResponse');
require('dotenv').config();

exports.create = [
  // Validate fields.
  body('value')
    .isLength({ min: 1 })
    .trim()
    .withMessage('Value must be specified.'),

  check('value').escape(),

  async (req, res) => {
    try {
      // Extract the validation errors from a request.
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // Display sanitized values/errors messages.
        return apiResponse.validationError(res, errors.array()[0].msg, null);
      } else {
        const value = new ValueModel({
          name: req.body.value,
        });

        const saveValue = await value.save();
        const result = await ValueModel.findOne({ _id: saveValue._id });
        return apiResponse.successResponseWithData(
          res,
          'value created successfully.',
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
        const value = req.body.value;

        const checkValueExist = await ValueModel.findById(Id);
        if (checkValueExist) {
          const updateValue = await ValueModel.findByIdAndUpdate(
            Id,
            { $set: { name: value || checkValueExist.value } },
            { new: true }
          );
          return apiResponse.successResponseWithData(
            res,
            'value updated successfully.',
            updateValue
          );
        } else {
          return apiResponse.validationError(
            res,
            "value doesn't exists.",
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

        const listValues = await ValueModel.find()
          .skip((page - 1) * count)
          .limit(count);
        return apiResponse.successResponseWithData(
          res,
          'List of values.',
          listValues
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

        const checkValueExist = await ValueModel.findById(Id);
        if (checkValueExist) {
          const deleteValue = await ValueModel.deleteOne({ _id: Id });
          return apiResponse.successResponseWithData(
            res,
            `Value with id: ${Id} deleted successfully.`,
            deleteValue
          );
        } else {
          return apiResponse.validationError(
            res,
            "value doesn't exists.",
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
