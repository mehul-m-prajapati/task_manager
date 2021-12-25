const {CustomAPIError} = require('../errors/custom-error');

const errHandlerMiddleware = (err, req, res, next) => {

    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({msg: err.message});
    }

    // default error message
    return res.status(500).json({msg: "Something went wrong. Please try again."});
   // return res.status(err.status).json({msg: err.message});
}

module.exports = errHandlerMiddleware;
