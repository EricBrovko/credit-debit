"use strict";

const UNKNOWN_ERROR_MESSAGE = "unknown error";

module.exports = {
  sendSuccessResponse: (request, response, data, code) => {
    if (request.timedout === true) {
      return;
    }

    if (request.sentResponse === true){
      return;
    }

    code = code || 200;
    request.sentResponse = true;

    return response.status(code).send(data);
  },

  sendErrorResponse: (request, response, errors, code) => {
    code = code || 400;
    const formattedErrors = [];

    if (Array.isArray(errors.errors)) {
      errors.errors.forEach(function (error) {
        formattedErrors.push({
          code: error.code || code,
          message: (
            error.path && error.message
              ? `${error.path} : ${error.message}`
              : UNKNOWN_ERROR_MESSAGE
          )
        });
      });
    } else if (Array.isArray(errors)) {
      errors.forEach(function (error) {
        formattedErrors.push({
          code: "someError",
          message: error.toString()
        });
      });
    } else if (errors instanceof Error) {
      formattedErrors.push({
        code: "someError",
        message: errors.toString()
      });
    } else {
      formattedErrors.push({
        code: "someError",
        message: errors.toString()
      });
    }

    if (request.timedout === true) {
      return;
    }

    if (request.sentResponse === true){
      return;
    }

    request.sentResponse = true;

    return response.status(code).json({ errors: formattedErrors });
  }
};
