const { StatusCodes } = require('http-status-codes')

const errorHandler = (err, req, res, next) => {
    console.log('testing')

    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || 'Something went wrong please try again later'
    }

    res.status(customError.statusCode).json({ msg: customError.message })
}

module.exports = errorHandler