const errHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    return res.status(500).json(err.message);
}

module.exports = errHandlerMiddleware;
