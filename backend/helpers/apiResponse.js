exports.successResponse = function (res, msg) {
  let resData = {
    status: true,
    message: msg,
    data: null,
  };
  return res.status(200).json(resData);
};

exports.successResponseWithData = function (res, msg, data) {
  let resData = {
    status: true,
    message: msg,
    data: data,
  };
  return res.status(200).json(resData);
};

exports.successResponseWithData2 = function (res, msg, page, count, data) {
  let resData = {
    status: true,
    message: msg,
    page: page,
    count: count,
    data: data,
  };
  return res.status(200).json(resData);
};

exports.ErrorResponse = function (res, msg) {
  var resData = {
    status: false,
    message: msg,
    data: null,
  };
  return res.status(500).json(resData);
};

exports.notFoundResponse = function (res, msg) {
  var resData = {
    status: false,
    message: msg,
    data: null,
  };
  return res.status(404).json(resData);
};

exports.validationError = function (res, msg, data) {
  var resData = {
    status: false,
    message: msg,
    data: data,
  };
  return res.status(400).json(resData);
};

exports.unauthorizedResponse = function (res, msg) {
  var resData = {
    status: false,
    message: msg,
    data: null,
  };
  return res.status(401).json(resData);
};
